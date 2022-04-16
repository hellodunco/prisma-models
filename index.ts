import express from "express";
import customerRouter from "./routes/customerRouter";
import orderRouter from "./routes/orderRouter";

const app = express();
app.use(express.json());

// Customer routes
app.use("/api", customerRouter);
app.use("/api", orderRouter);

const PORT = 3333;
app.listen(PORT, () => console.log(`App listening on port: ${PORT}`));
