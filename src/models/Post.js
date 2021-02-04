const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

//exporting model
module.exports = mongoose.model("Posts", PostSchema);
