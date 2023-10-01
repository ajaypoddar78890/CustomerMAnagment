import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import connectDB from "./config/DB.js";
import AuthRoutes from "./routes/AuthRoutes.js";
// import TaskModel from "./Models/TaskModel.js";
import customerRoutes from "./routes/customerRoutes.js";

//configure env
dotenv.config();
//databse config
connectDB();

//rest object
const app = express();

//middelwares
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

app.use(express.json());
app.use(morgan("tiny"));

//Routes

app.use("/api/auth", AuthRoutes);
app.use("/api/customer", customerRoutes);

//rest api
app.get("/", (req, res) => {
  res.send("<h1>Welcome to test app</h1>");
});

//port
const PORT = process.env.PORT || 5500;
//listing the app

app.listen(PORT, () => {
  console.log(`server is running at ${process.env.PORT}`);
});
