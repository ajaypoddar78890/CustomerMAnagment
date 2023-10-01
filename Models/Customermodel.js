// import mongoose from "mongoose";

// const taskSchema = new mongoose.Schema({
//   title: {
//     type: String,
//     required: true,
//   },
//   description: {
//     type: String,
//     require: true,
//   },
//   status: {
//     type: String,
//     enum: ["todo", "in progress", "done"],
//     default: "todo",
//   },
//   dueDate: {
//     type: Date,
//     validate: {
//       validator: function (value) {
//         // Custom validator function to check if the due date is in the future
//         return value > new Date();
//       },
//       message: "Due date must be in the future.",
//     },
//   },
// });

// export default mongoose.model("tasks", taskSchema);

import mongoose from "mongoose";

const CustomerSchema = new mongoose.Schema(
  {
    user_name: {
      type: String,
      required: true,
    },
    user_email: {
      type: String,
      required: true,
      unique: true,
    },
    user_password: {
      type: String,
      required: true,
    },
    user_image: String, // Assuming user_image is a URL or file path

    total_orders: {
      type: Number,
      default: 0, // Default to 0 orders
    },

    last_logged_in: {
      type: Date,
      default: null, // Initially, last_logged_in can be null
    },
  },
  { timestamps: true }
);

export default mongoose.model("customer", CustomerSchema);
