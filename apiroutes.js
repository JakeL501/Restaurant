// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
// =============================================================

app.get("/api/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tableData.js"));
    
  });

  app.get("/api/waitlist", function(req, res) {
    res.sendFile(path.join(__dirname, "waitinglistData.js"));
        
  });


  // Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });