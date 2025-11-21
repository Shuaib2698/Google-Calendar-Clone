const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/calendar', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

// Routes
const eventRoutes = require('./routes/events');
app.use('/api/events', eventRoutes);

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Calendar Backend API is running!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});