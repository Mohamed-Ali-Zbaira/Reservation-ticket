// pages/api/users.js

import mongoose from 'mongoose';

// Check if the model already exists
const User = mongoose.models.User || mongoose.model('User', new mongoose.Schema({
  // Define your user schema fields here
  // Example: name: String, age: Number, ...
}));

// Connect to MongoDB using Mongoose
mongoose
  .connect('mongodb://127.0.0.1:27017/Ticket', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Database connected!'))
  .catch((err) => {
    console.log(err.message);
  });

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.status(405).json({ message: 'Method Not Allowed' });
    return;
  }

  try {
    // Retrieve data from the 'users' collection
    const users = await User.find();

    res.status(200).json({ users });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
