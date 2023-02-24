const config = require('./config/config');
const mongoose = require('mongoose');
const app = require('./app');

const PORT = process.env.PORT || config.port;
mongoose.set('strictQuery', false);

mongoose.connect(config.mongoose.url, config.mongoose.options, (err, res) => {
  if (err) {
    console.log(err);
    console.log('MongoDB connection failed');
  } else {
    console.log('Connected to MongoDB!!');
    app.listen(PORT, console.log(`Server started on port ${PORT}`));
  }
});
