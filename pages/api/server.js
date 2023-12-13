// server.js
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

mongoose
  .connect('mongodb://127.0.0.1:27017/Ticket')
  .then(() => console.log("Database connected!"))
  .catch((err) => {
    console.log(err.message);
  });

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  role: {
    type: String,
    enum: ["user", "admin"],
  },
});

const User = mongoose.model("User", userSchema);

const ticketSchema = new mongoose.Schema({
  name: String,
  price: Number,
});

const Ticket = mongoose.model("Ticket", ticketSchema);

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const Contact = mongoose.model("Contact", contactSchema);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({origin: "*"}));

app.get("/api/users", async (req, res) => {
  const users = await User.find();
  res.status(200).json({
    users,
  });
});

app.post("/api/tickets", async (req, res) => {
  const username = req.cookies.username;
  const user = await User.findOne({ username });

  // if (!user || user.role !== "admin") {
  //   return res.status(400).json({
  //     message: "Only admins can create tickets.",
  //   });
  // }

  const newTicket = await Ticket.create({
    name: req.body.name,
    price: req.body.price,
  });

  res.status(201).json({
    ticket: newTicket,
  });
});

app.get("/api/tickets", async (req, res) => {
  const tickets = await Ticket.find();
  res.status(200).json({
    tickets,
  });
});

app.post("/api/contactss", async (req, res) => {
  const newContact = await Contact.create({
    name: req.body.name,
    email: req.body.email,
    message: req.body.message,
  });

  res.status(201).json({
    contact: newContact,
  });
});

app.get("/api/contacts", async (req, res) => {
  const username = req.cookies.username;
  const user = await User.findOne({ username });

  if (!user || user.role !== "admin") {
    return res.status(400).json({
      message: "Not authorized",
    });
  }

  const contacts = await Contact.find();
  res.status(200).json({
    contacts,
  });
});

app.post("/api/login", async (req, res) => {
  const user = await User.findOne({ username: req.body.username }).exec();
  const {Password} =  user?.toJSON();
  

  if (!user || req.body.password !== Password) {
    return res.status(400).json({
      message: "Invalid credentials",
    });
  }

  res.cookie("email", user.email);
  res.status(200).json({
    user,
  });
});
//Delete Ticket
// app.post("/api/tickets/delete", async (req, res) => {
//   const ticketId = req.body.id;

//   try {
//     const deletedTicket = await Ticket.findByIdAndDelete(ticketId);

//     if (!deletedTicket) {
//       return res.status(404).json({ message: "Ticket not found" });
//     }

//     return res.status(200).json({ message: "Ticket deleted successfully" });
//   } catch (error) {
//     return res.status(500).json({ message: "Internal server error" });
//   }
// });

//Delete User
app.post("/api/users/delete", async (req, res) => {
  const user = await User.findByIdAndDelete(req.body.id);
  console.log(user);
    if(!user) return res.status(422).json({message: "Invalid user!!"});
    return res.status(200).json({message: "user deleted successfully!!"});
});

app.post("/api/users/update", async (req, res) => {
  const user = await User.findByIdAndUpdate(req.body.id, {$set:{
    ...req.body
  }}, {new: true});
    if(!user) return res.status(422).json({message: "Invalid user!!"});
    return res.status(200).json({message: "user updated successfully!!"});
});

app.post("/api/register", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  if (user) {
    return res.status(400).json({
      message: "User already exists",
    });
  }

  const newUser = await User.create({
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
    role: "user",
  });

  res.cookie("email", newUser.email);
  res.status(201).json({
    user: newUser,
  });
});

app.delete("/api/tickets/:id", async (req, res) => {
  const username = req.cookies.username;
  const user = await User.findOne({ username });

  if (!user || user.role !== "admin") {
    return res.status(400).json({
      message: "Only admins can delete tickets.",
    });
  }

  await Ticket.findByIdAndDelete(req.params.id);

  res.status(200).json({
    message: "Ticket deleted successfully",
  });
});

const port = process.env.PORT || 9999;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
