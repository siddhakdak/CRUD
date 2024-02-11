const express = require("express");
const mongoose = require("mongoose");
const User = require("../models/userModule");
const router = express.Router();

//  Create data
router.post("/", async (req, res) => {
  const { name, email, age } = req.body;

  try {
    const userAdded = await User.create({
      name: name,
      email: email,
      age: age,
    });

    res.status(201).json(userAdded);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
});

// get data
router.get("/", async (req, res) => {
  try {
    const findData = await User.find();
    res.status(200).json(findData);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
});

// get single user

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const oneUser = await User.findById({ _id: id });
    res.status(200).json(oneUser);
  } catch (error) {
    res.status(404).json({ message: "No user with this ID" });
    console.log(error);
  }
});

// delete one
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deleteUser = await User.findByIdAndDelete({ _id: id });
  res.status(200).json(deleteUser);
});

// update function
router.patch("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const {email, name, age} = req.body;
    const update = await User.findByIdAndUpdate(id, req.body, {new: true});
    res.status(200).json(update);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

module.exports = router;
