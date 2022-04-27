import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { convertDate } from "../index";

const orderRoute = express.Router();
const prisma = new PrismaClient();

// Create order
orderRoute.post("/orders", async (req: Request, res: Response) => {
  try {
    let { order_no, customer_id, items, order_date, duration, status } =
      req.body;

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
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get all orders
orderRoute.get("/orders", async (req: Request, res: Response) => {
  try {
    const allOrders = await prisma.order.findMany();

    res.json(allOrders);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get specific order
orderRoute.get("/orders/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const order = await prisma.order.findUnique({
      where: {
        order_no: id,
      },
    });

    res.json(order);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update order
orderRoute.get("/orders/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    let { customer_id, items, order_date, duration, status } = req.body;

    order_date = convertDate(order_date);
    const updatedOrder = await prisma.order.update({
      where: {
        order_no: id,
      },
      data: {
        customer_id,
        items,
        order_date,
        duration: Number(duration),
        status,
      },
    });

    res.json(updatedOrder);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Delete order
orderRoute.get("/orders/:id", async (req: Request, res: Response) => {
  try {
    const order_no = req.params.id;
    const deletedOrder = await prisma.order.delete({
      where: {
        order_no,
      },
    });

    res.json(deletedOrder);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default orderRoute;
