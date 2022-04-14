import express from "express";
import { PrismaClient } from "@prisma/client";

const orderRouter = express.Router();
const prisma = new PrismaClient();

orderRouter.post("/addOrder", async (req, res) => {
  const { order_no, customer_id, order_date, duration, status } = req.body;

  const Order = await prisma.order.create({
    data: {
      order_no,
      customer_id,
      order_date,
      duration,
      status,
    },
  });

  res.json(Order);
});

orderRouter.get("/orders", async (res) => {
  const allOrders = await prisma.order.findMany();
  res.json(allOrders);
});

export default router;
