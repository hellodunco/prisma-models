import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { convertDate } from "../index";

const invoiceRoute = express.Router();
const prisma = new PrismaClient();

// Create invoive
invoiceRoute.post("/invoices", async (req: Request, res: Response) => {
  try {
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
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get invoices
invoiceRoute.get("/invoices", async (req: Request, res: Response) => {
  try {
    const allInvoices = await prisma.invoice.findMany();
    res.json(allInvoices);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get specific invoice
invoiceRoute.get("/invoices/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const invoice = await prisma.invoice.findUnique({
      where: {
        invoice_no: id,
      },
    });

    res.json(invoice);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update invoice
invoiceRoute.put("/invoices/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    let { customer_id, invoice_date, due_date, duration, status } = req.body;

    invoice_date = convertDate(invoice_date);
    due_date = convertDate(due_date);
    const updatedInvoice = await prisma.invoice.update({
      where: {
        invoice_no: id,
      },
      data: {
        customer_id: Number(customer_id),
        invoice_date,
        due_date,
        duration: Number(duration),
        status,
      },
    });

    res.json(updatedInvoice);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Delete invoice
invoiceRoute.delete("/invoices/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const deletedInvoice = await prisma.invoice.delete({
      where: {
        invoice_no: id,
      },
    });

    res.json(deletedInvoice);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default invoiceRoute;
