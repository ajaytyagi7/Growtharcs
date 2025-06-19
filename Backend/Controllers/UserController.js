
const { addCustomer, getAllUsers, getUserByEmail } = require('../Model/UserModel');

// Controller to add a new user
const addUser = async (req, res) => {
  try {
    console.log("📥 Received data:", req.body);
    const result = await addCustomer(req.body);
    res.status(200).json(result);
  } catch (err) {
    console.error("❌ Error in addUser:", err.message);
    res.status(500).json({ error: err.message });
  }
};

// Controller to get all users
const fetchAllUsers = async (req, res) => {
  try {
    const users = await getAllUsers();
    res.status(200).json(users);
  } catch (err) {
    console.error("❌ Error in fetchAllUsers:", err.message);
    res.status(500).json({ error: err.message });
  }
};

// Controller to get user by email
const fetchUserByEmail = async (req, res) => {
  try {
    const user = await getUserByEmail(req.params.email);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: 'User Not Found' });
    }
  } catch (err) {
    console.error("❌ Error in fetchUserByEmail:", err.message);
    res.status(500).json({ error: err.message });
  }
};

// Controller for user login (to generate JWT)
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await getUserByEmail(email);
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Compare password
    const bcrypt = require('bcrypt');
    const isMatch = await bcrypt.compare(password, user.Password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Generate JWT
    const jwt = require('jsonwebtoken');
    const token = jwt.sign(
      { id: user.id, email: user.Email },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.status(200).json({ success: true, token });
  } catch (err) {
    console.error("❌ Error in loginUser:", err.message);
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  addUser,
  fetchAllUsers,
  fetchUserByEmail,
  loginUser,
};