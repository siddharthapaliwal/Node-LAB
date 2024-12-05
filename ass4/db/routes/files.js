const express = require("express");
const File = require("../models/file");
const Folder = require("../models/folder");
const router = express.Router();

// Create a file
router.post("/files", async (req, res) => {
    try {
        const file = new File(req.body);
        const savedFile = await file.save();

        // Add file reference to folder
        if (file.folder) {
            const folder = await Folder.findById(file.folder);
            folder.files.push(savedFile._id);
            await folder.save();
        }

        res.status(201).json(savedFile);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get all files
router.get("/files", async (req, res) => {
    try {
        const files = await File.find().populate("folder");
        res.status(200).json(files);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get a file by ID
router.get("/files/:id", async (req, res) => {
    try {
        const file = await File.findById(req.params.id).populate("folder");
        if (!file) return res.status(404).json({ message: "File not found" });
        res.status(200).json(file);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update a file
router.put("/files/:id", async (req, res) => {
    try {
        const updatedFile = await File.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedFile) return res.status(404).json({ message: "File not found" });
        res.status(200).json(updatedFile);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Delete a file
router.delete("/files/:id", async (req, res) => {
    try {
        const file = await File.findByIdAndDelete(req.params.id);
        if (!file) return res.status(404).json({ message: "File not found" });

        // Remove file reference from folder
        if (file.folder) {
            const folder = await Folder.findById(file.folder);
            folder.files.pull(file._id);
            await folder.save();
        }

        res.status(200).json({ message: "File deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
