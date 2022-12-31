
//requirements
const express = require('express');
const mongoose = require('mongoose');
const app=express();
//const postRoutes = require('./routes/postRoutes');

// Connect to MongoDB
mongoose.connect('mongodb://localhost/myblog', { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB');
});

// Use Pug as the view engine
app.set('view engine', 'pug');

// Set up routes
const postRouter = require('./routes/postRoutes');
app.use('/posts', postRouter);

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Blog app listening on port ${port}`);
});


module.exports=app