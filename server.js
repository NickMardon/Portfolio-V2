// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
//==============================================================

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// use the public folder
app.use(express.static('public'));

const htmlRoutes = require('./routes/html-routes');
app.use(htmlRoutes);

// Start the Server
app.listen(PORT, function() {
    console.log("App listening on PORT http://localhost:" + PORT);
  });