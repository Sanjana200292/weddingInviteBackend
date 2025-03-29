const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();
app.use(cors());
app.use(express.json());

app.use(cookieParser());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

const guestRoutes = require("./routes/guestRoutes");
app.use("/api", guestRoutes);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log("Server running on port 5000"));
