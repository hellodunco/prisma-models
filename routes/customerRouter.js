const express = require("express");
const PrismaClient = require("@prisma/client");

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

customerRouter.get("/customers", async (res) => {
  const allCustomers = await prisma.customer.findMany();

  res.json(allCustomers);
});

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

module.exports = customerRouter;
