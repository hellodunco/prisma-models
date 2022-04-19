import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const orderRoute = express.Router();
const prisma = new PrismaClient();

// Create order
orderRoute.post("/order", async (req: Request, res: Response) => {
  const { order_no, customer_id, items, order_date, duration, status } =
    req.body;

  const Order = await prisma.order.create({
    data: {
      order_no,
      customer_id,
      items,
      order_date,
      duration: Number(duration),
      status,
    },
  });

  res.json(Order);
});

// Get all orders
orderRoute.get("/orders", async (req: Request, res: Response) => {
  const allOrders = await prisma.order.findMany();

  res.json(allOrders);
});

// Get specific order
orderRoute.get("/orders/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const items = req.body.items;

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
