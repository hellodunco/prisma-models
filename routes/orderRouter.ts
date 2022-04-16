import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const orderRouter = express.Router();
const prisma = new PrismaClient();

orderRouter.post("/order", async (req: Request, res: Response) => {
  const { order_no, customer_id, order_date, duration, status, invoice_no } =
    req.body;

  const Order = await prisma.order.create({
    data: {
      order_no,
      customer_id,
      order_date: new Date(),
      duration: Number(duration),
      status,
      invoice_no,
    },
  });

  res.json(Order);
});

orderRouter.get("/orders", async (req: Request, res: Response) => {
  const allOrders = await prisma.order.findMany();

  res.json(allOrders);
});

export default orderRouter;
