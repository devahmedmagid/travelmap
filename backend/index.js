const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = express();
dotenv.config();

const pinRoute = require('./routes/pins');
const userRoute = require('./routes/users');
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('MongoDB Connected');
  })
  .catch((error) => {
    console.log(error);
  });

app.use('/api/users', userRoute);
app.use('/api/pins', pinRoute);

app.listen(8800, () => {
  console.log('Backend server is running!');
});
