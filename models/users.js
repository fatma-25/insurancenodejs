const mongoose = require("mongoose");
const schema = mongoose.Schema;

const userSchema = new schema({
  nom: { type: String, required: true },
  prenom: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
date:{ type: String, required: true },
  
});

module.exports = User = mongoose.model("user", userSchema);