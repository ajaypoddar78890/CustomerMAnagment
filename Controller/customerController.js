import customer from "../Models/Customermodel.js";

//create new customer here
export const Createcustomer = async (req, res) => {
  try {
    const newcustomer = new customer(req.body);
    await newcustomer.save();
    res.status(201).json(newcustomer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
export const GetAllcustomer = async (req, res) => {
  try {
    // Fetch all customer from your database or perform the necessary logic
    const tasks = await customer.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
export const Getcustomerbyid = async (req, res) => {
  try {
    // Fetch a single customer by ID from your database or perform the necessary logic
    const customerId = req.params.id;
    const task = await customer.findById(customerId);

    if (!task) {
      return res.status(404).json({ message: "customer not found" });
    }

    res.status(200).json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
export const Deletecustomer = async (req, res) => {
  try {
    // Delete a customer by ID from your database or perform the necessary logic
    const customerId = req.params.id;
    const deletedTask = await customer.findByIdAndDelete(customerId);

    if (!deletedTask) {
      return res.status(404).json({ message: "customer not found" });
    }

    res.status(200).json({ message: "customer deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update a customer by ID
export const UpdatecustomerbyID = async (req, res) => {
  const customerId = req.params.id;
  try {
    const updatedTask = await customer.findByIdAndUpdate(
      customerId,
      req.body,
      { new: true } // This option returns the updated document
    );

    if (!updatedTask) {
      return res.status(404).json({ message: "customer not found" });
    }

    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
