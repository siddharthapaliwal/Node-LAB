const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();

// Set up storage for uploaded files
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Directory where files will be saved
    },
    filename: (req, file, cb) => {
        const uniqueName = `${Date.now()}-${file.originalname}`;
        cb(null, uniqueName); // Save files with a unique name
    },
});

// Set up multer middleware
const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        // Allow only specific file types (e.g., images)
        const allowedTypes = /jpeg|jpg|png|gif/;
        const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = allowedTypes.test(file.mimetype);

        if (extname && mimetype) {
            cb(null, true);
        } else {
            cb(new Error('Only images are allowed!'));
        }
    },
    limits: { fileSize: 2 * 1024 * 1024 }, // Limit file size to 2MB
});

// Middleware to serve static files (for form and uploads directory)
app.use(express.static('public'));
app.use('/uploads', express.static('uploads'));

// File upload route
app.post('/upload', upload.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).send({ message: 'No file uploaded!' });
    }

    res.status(200).send({
        message: 'File uploaded successfully!',
        fileDetails: {
            filename: req.file.filename,
            path: req.file.path,
            size: req.file.size,
            mimetype: req.file.mimetype,
        },
    });
});

// Default route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'form.html'));
});

// Error-handling middleware
app.use((err, req, res, next) => {
    if (err instanceof multer.MulterError) {
        res.status(500).send({ message: 'Multer error occurred!', error: err.message });
    } else if (err) {
        res.status(500).send({ message: 'An error occurred!', error: err.message });
    } else {
        next();
    }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
