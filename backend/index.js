let express = require("express");
let app = express();

const cors = require("cors");
let port = 8081
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

  app.listen(port, () => {
    console.log("Backend Started " + port);
  });