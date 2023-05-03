const express = require("express");
const mongoose = require("mongoose");
const app = express();
const companyRoutes = require("./Routes/companyRoutes");

app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://user123:pass123Aneesh@cluster0.zhzedj2.mongodb.net/test"
  )
  .then(() => {
    console.log("DB connected!");
  });

app.use("/company", companyRoutes);

app.listen(3000, () => {
  console.log("Server running properly!");
});
