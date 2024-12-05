const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
    name: { type: String, required: true },
    size: { type: Number }, // Size in bytes
    folder: { type: mongoose.Schema.Types.ObjectId, ref: "Folder" }, // Reference to parent folder
}, { timestamps: true });

module.exports = mongoose.model("File", fileSchema);
