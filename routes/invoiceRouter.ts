import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { convertDate } from "../index";

const invoiceRoute = express.Router();
const prisma = new PrismaClient();

// Create invoive
invoiceRoute.post("/invoices", async (req: Request, res: Response) => {
  let {
    invoice_no,
    customer_id,
    order_no,
    invoice_date,
    due_date,
    duration,
    status,
  } = req.body;

  invoice_date = convertDate(invoice_date);
  due_date = convertDate(due_date);
  const invoice = await prisma.invoice.create({
    data: {
      invoice_no,
      customer_id: Number(customer_id),
      order_no,
      invoice_date,
      due_date,
      duration: Number(duration),
      status,
    },
  });

  res.json(invoice);
});

// Get invoices
invoiceRoute.get("/invoices", async (req: Request, res: Response) => {
  const allInvoices = await prisma.invoice.findMany();
  res.json(allInvoices);
});

// Get specific invoice
invoiceRoute.get("/invoices/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const invoice = await prisma.invoice.findUnique({
    where: {
      invoice_no: id,
    },
  });

  res.json(invoice);
});

// Update invoice
invoiceRoute.put("/invoices/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  let {
    invoice_no,
    customer_id,
    order_no,
    invoice_date,
    due_date,
    duration,
    status,
  } = req.body;

  invoice_date = convertDate(invoice_date);
  due_date = convertDate(due_date);
  const updatedInvoice = await prisma.invoice.update({
    where: {
      invoice_no: id,
    },
    data: {
      invoice_no,
      customer_id: Number(customer_id),
      order_no,
      invoice_date,
      due_date,
      duration: Number(duration),
      status,
    },
  });

  res.json(updatedInvoice);
});

// Delete invoice
invoiceRoute.delete("/invoices/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const deletedInvoice = await prisma.invoice.delete({
    where: {
      invoice_no: id,
    },
  });

  res.json(deletedInvoice);
});

export default invoiceRoute;
