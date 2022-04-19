import express from "express";
import customerRouter from "./routes/customerRouter";
import invoiceRoute from "./routes/invoiceRouter";
import orderRouter from "./routes/orderRouter";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

export const convertDate = (date: String) => {
  const stringDate = date.split("-");
  // Please pay attention to the month (parts[1]); JavaScript counts months from 0:
  // January - 0, February - 1, etc.

  const yyyy = Number(stringDate[0]);
  const mm = Number(stringDate[1]) - 1;
  const dd = Number(stringDate[2]);

  return new Date(yyyy, mm, dd);
};

// Customer routes
app.use("/api", customerRouter);
app.use("/api", orderRouter);
app.use("/api", invoiceRoute);

const PORT = 3333;
app.listen(PORT, () => console.log(`App listening on port: ${PORT}`));
