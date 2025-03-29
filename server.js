require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(cookieParser());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

const guestRoutes = require("./routes/guestRoutes");
app.use("/api", guestRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log("Server running on port 5000"));
