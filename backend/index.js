let express = require("express");
let app = express();
let mongoose = require("mongoose");
const cors = require("cors");
const router = require("./router/router");
const instructorRoute = require("./router/instructor.router");
const fs = require('fs');
require("dotenv").config();

app.get("/", (req, res) => {
  res.send("Home Route");
});


app.use((error,req,res,next)=>{
  if(req.file){
    fs.unlink(req.file.path, err=>{
      console.log(err);
    });
  }
  if(res.headersent){
    return next(error);
  }
  res.status(error.code || 500);
  res.json({message: error.message || 'An unknown error occurred!'});
});

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

let db = mongoose.connection;
if (!db) {
  console.log("Connection - error");
} else {
  console.log("Connected");
}

app.use("/api",router)
app.use("/instructor",instructorRoute())

app.listen(process.env.PORT, () => {
  console.log("Backend Started " + process.env.PORT);
});
