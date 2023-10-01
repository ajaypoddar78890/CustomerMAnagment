import express from "express";
import {
  Createcustomer,
  Deletecustomer,
  GetAllcustomer,
  Getcustomerbyid,
  UpdatecustomerbyID,
} from "../Controller/customerController.js";

// router object

const router = express.Router();

// Task Crud Operation

// create
router.post("/createcustomer", Createcustomer);

// get all task
router.get("/getallcustomer", GetAllcustomer);

//get task by id
router.get("/getcustomer/:id", Getcustomerbyid);

//delete the task
router.delete("/delete/:id", Deletecustomer);

// update Task by id
router.put("/update/:id", UpdatecustomerbyID);

export default router;
