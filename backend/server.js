const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const todoRoutes = require('./routes/todoRoutes');
const rateLimit = require('express-rate-limit');

const app = express();
const PORT = process.env.PORT || 10000;

// Middleware
app.use(express.json());
app.use(cors());

// Rate limiting
const registerLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // Increase the limit to 10 requests per windowMs for testing
  message: 'Too many registrations from this IP, please try again later.'
});

// Routes
app.use('/api/auth', registerLimiter, authRoutes);
app.use('/api/todos', todoRoutes);

// Database connection
mongoose.connect('mongodb+srv://nannakasaiteja:teja6rC3MFuKG7g7uj4d@saitejanannaka.fqbbn5o.mongodb.net/API_Automation_TestCases', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
})
.catch(err => console.log(err));
