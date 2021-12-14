console.log("GoGame Backend is running");

const express = require("express");
const conectarDB = require("./config/db");
const cors = require("cors");
const app = express();

conectarDB();

app.use(express.json());
app.use(cors());
app.use("/stock/products", require("./routes/products"));
app.use("/sales", require("./routes/sales"));
app.use("/contact", require("./routes/contact"));

app.listen(3025, () => {
  console.log("App listening on port 3025!");
});
