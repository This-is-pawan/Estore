const express = require("express");
const server = express();
const cors = require("cors");
const user = require("./mongoose");
require("./db");
require('dotenv').config();

// Middleware
server.use(cors());
server.use(express.json());

// GET route
server.get("/", async (req, res) => {
  try {
    const data = await user.find();
    console.log(data);
    return res.json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    return res.status(500).send("Error occurred while fetching data");
  }
});

// POST route
server.post("/posting", async (req, res) => {
  try {
    const newUser = new user(req.body);
    await newUser.save();
    return res.status(201).json({ data: newUser });
  } catch (error) {
    console.error("Error saving user:", error);
    return res.status(400).json({ message: "Failed to save user", error });
  }
});

// DELETE route
server.delete("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deletedItem = await user.findByIdAndDelete(id);
    if (!deletedItem) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.status(200).json({ message: "Item deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting item", error: error.message });
  }
});

// patch route
server.patch("/update/:id", async (req, res) => {
  try {
    const updating = await user.findByIdAndUpdate(req.params.id, req.body,{ new: true, runValidators: true });
    if (!updating) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ message: "User updated successfully", data: updating });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ message: "Error updating user", error: error.message });
  }
});

// Start the server

server.listen(process.env.PORT || 4000, () => {
  console.log("Server is running on port 4000");
});
