import express from "express";
import customerRoutes from "./routes/customerRouter.js";
import orderRoutes from "./routes/orderRouter.js";

const app = express();
app.use(express.json());

// Customer routes
app.use("/api", customerRoutes);
app.use("/api", orderRoutes);

const PORT = 3333;
app.listen(PORT, () => console.log(`App listening on port: ${PORT}`));
