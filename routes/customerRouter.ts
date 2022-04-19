import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const customerRoute = express.Router();
const prisma = new PrismaClient();

customerRoute.post("/customers", async (req, res) => {
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
customerRoute.get("/customers/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const customer = await prisma.customer.findUnique({
    where: {
      id: Number(id),
    },
  });

  res.json(customer);
});

// Get all customers
customerRoute.get("/customers", async (req: Request, res: Response) => {
  const allCustomers = await prisma.customer.findMany();

  res.json(allCustomers);
});

// Update customer data
customerRoute.put("/customers/:id", async (req: Request, res: Response) => {
  const id = req.params.id;

  const { customer_name, address, location } = req.body;
  const updatedCustomer = await prisma.customer.update({
    where: {
      id: Number(id),
    },
    data: {
      customer_name,
      address,
      location,
    },
  });

  res.json(updatedCustomer);
});

// Delete a customer
customerRoute.delete("/customers/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const deletedCustomer = await prisma.customer.delete({
    where: {
      id: Number(id),
    },
  });
  res.json(deletedCustomer);
});

export default customerRoute;
