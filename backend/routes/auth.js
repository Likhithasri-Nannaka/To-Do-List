const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs'); // Use 'bcryptjs' instead of 'bcrypt'
const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

router.post('/register', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if email already exists in the local database
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already exists' });
    }

    // Hash the password and create a new user
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ email, password: hashedPassword });

    // Save the user to the local database
    await user.save();

    // Optionally, create a new user in Supabase
    // const { error: supabaseError } = await supabase.auth.signUp({ email, password });
    // if (supabaseError) throw supabaseError;

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Registration Error:', error.message); // Log detailed error message

    if (error.message.includes('rate limit') || error.status === 429) {
      res.status(429).json({ error: 'Email rate limit exceeded. Please try again later.' });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
});

module.exports = router;
