const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect("mongodb+srv://bechirayari240:bechirayari240@cluster0.err1fzv.mongodb.net/?retryWrites=true&w=majority");
};
