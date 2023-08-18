const mongoose = require('mongoose');
const cors = require('cors')
const path = require('path');
const express = require('express');
const app = express();
const routers = require('./routes/routers')

mongoose.connect('mongodb://localhost/homepage')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...'));

app.use(express.json());
app.use(cors());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/api',routers)


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));