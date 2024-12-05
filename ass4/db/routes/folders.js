const mongoose = require("mongoose");

const folderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  files: [{ type: mongoose.Schema.Types.ObjectId, ref: "File" }], // References files
}, { timestamps: true });

module.exports = mongoose.model("Folder", folderSchema);
