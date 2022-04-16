const express = require("express");
const customerRouter = require("./routes/customerRouter");
const orderRouter = require("./routes/orderRouter");

const app = express();
app.use(express.json());

// Customer routes
app.use("/api", customerRouter);
app.use("/api", orderRouter);

const PORT = 3333;
app.listen(PORT, () => console.log(`App listening on port: ${PORT}`));
