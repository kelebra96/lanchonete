const mongoose = require('mongoose');


function connectToDatabase() {
  mongoose.connect('mongodb://localhost/mydatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = mongoose.connection;

  db.on('error', console.error.bind(console, 'Connection error:'));
  db.once('open', () => {
    console.log('Connected to the database');
  });
}
mongoose.connect('mongodb://localhost:27017/lanche', { useNewUrlParser: true, useUnifiedTopology: true });

