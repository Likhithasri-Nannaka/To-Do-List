const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb+srv://nannakasaiteja:teja6rC3MFuKG7g7uj4d@saitejanannaka.fqbbn5o.mongodb.net/API_Service';

mongoose.connect(MONGODB_URI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));
