var waitinglistData = require("../data/waitinglistData.js");
// console.log(waitinglistData);

var tableData = require("../data/tableData.js");
// console.log(tableData);



// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
// =============================================================

module.exports = function () {
  app.get("/api/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "tableData.js"));

  });

  app.get("/api/waitlist", function (req, res) {
    res.sendFile(path.join(__dirname, "waitinglistData.js"));

  });
}