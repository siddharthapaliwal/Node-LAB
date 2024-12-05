const mongoose = require('mongoose');

const folderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Prevent redefinition of the model
const Folder = mongoose.models.Folder || mongoose.model('Folder', folderSchema);

module.exports = Folder;
