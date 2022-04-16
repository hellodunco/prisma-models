import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const customerRouter = express.Router();
const prisma = new PrismaClient();

customerRouter.post("/customer", async (req, res) => {
  const { customer_name, address, location } = req.body;

  const customer = await prisma.customer.create({
    data: {
      customer_name,
      address,
      location,
    },
  });

  res.json(customer);
});

// Get individual customer
customerRouter.get("/customer", async (req: Request, res: Response) => {
  const { id } = req.body;

  const allCustomers = await prisma.customer.findUnique({
    where: {
      id: Number(id),
    },
  });

  res.json(allCustomers);
});

customerRouter.get("/customers", async (req: Request, res: Response) => {
  const allCustomers = await prisma.customer.findMany();

  res.json(allCustomers);
});

// Update customer data
customerRouter.put("/customer", async (req, res) => {
  const { id, location } = req.body;
  const updatedCustomer = await prisma.customer.update({
    where: {
      id: Number(id),
    },
    data: {
      location,
    },
  });

  res.json(updatedCustomer);
});

export default customerRouter;
