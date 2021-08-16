let express = require("express");
let app = express();
let mongoose = require("mongoose");
const cors = require("cors");
require('dotenv').config()
//let port = 8081

app.get("/", (req, res) => {
    res.send("Home Route");
  });


  app.use(
    express.urlencoded({
      extended: true,
    })
  );
  app.use(cors());
  app.use(express.json());

mongoose.connect(process.env.URI, { useUnifiedTopology: true, useNewUrlParser: true });

let db = mongoose.connection;
if (!db) {
  console.log("Connection - error");
} else{
    console.log("Connected")
}


  app.listen(process.env.PORT, () => {
    console.log("Backend Started " + process.env.PORT);
  });