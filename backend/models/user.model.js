var mongoose = require("mongoose");

//User Schems

let userScheam = mongoose.Schema({
  username: String,
  email: { type: String, required: true },
  password: { type: String, required: true },
  usertype: {
    type: String,
    default: "admin",
    required: true,
  },
});

module.exports = mongoose.model("user", userScheam);
