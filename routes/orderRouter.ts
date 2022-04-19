import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const orderRoute = express.Router();
const prisma = new PrismaClient();

// Create order
orderRoute.post("/orders", async (req: Request, res: Response) => {
  let { order_no, customer_id, items, order_date, duration, status } = req.body;

  function convertDate(date: String) {
    const stringDate = date.split("-");
    // Please pay attention to the month (parts[1]); JavaScript counts months from 0:
    // January - 0, February - 1, etc.

    const yyyy = Number(stringDate[0]);
    const mm = Number(stringDate[1]) - 1;
    const dd = Number(stringDate[2]);

    return new Date(yyyy, mm, dd);
  }

  order_date = convertDate(order_date);

  const order = await prisma.order.create({
    data: {
      order_no,
      customer_id,
      items,
      order_date,
      duration: Number(duration),
      status,
    },
  });

  res.json(order);
});

// Get all orders
orderRoute.get("/orders", async (req: Request, res: Response) => {
  const allOrders = await prisma.order.findMany();

  res.json(allOrders);
});

// Get specific order
orderRoute.get("/orders/:id", async (req: Request, res: Response) => {
  const id = req.params.id;

  const order = await prisma.order.findUnique({
    where: {
      order_no: id,
    },
  });

  res.json(order);
});

// Update order
orderRoute.get("/orders/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const items = req.body.items;

  const updatedOrder = await prisma.order.update({
    where: {
      order_no: id,
    },
    data: {
      items: JSON.parse(items),
    },
  });

  res.json(updatedOrder);
});

// Delete order
orderRoute.get("/orders/:id", async (req: Request, res: Response) => {
  const order_no = req.params.id;

  const deletedOrder = await prisma.order.delete({
    where: {
      order_no,
    },
  });

  res.json(deletedOrder);
});

export default orderRoute;
