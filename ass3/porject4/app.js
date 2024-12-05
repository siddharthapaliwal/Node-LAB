const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();

// Middleware to parse JSON data
app.use(bodyParser.json());

// Set up Nodemailer transporter (using a Gmail example here)
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,  // Your Gmail email address
        pass: process.env.EMAIL_PASS   // Your Gmail email password or app-specific password
    }
});

// Send Email route
app.post('/send-email', (req, res) => {
    const { to, subject, text, html } = req.body;

    // Set up the email options
    const mailOptions = {
        from: process.env.EMAIL_USER,  // Sender address
        to,                           // List of recipients
        subject,                      // Subject line
        text,                         // Plain text body
        html                          // HTML body (optional)
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log("Error: ", error);
            return res.status(500).json({ message: "Failed to send email", error });
        } else {
            console.log("Email sent: " + info.response);
            return res.status(200).json({ message: "Email sent successfully", info });
        }
    });
});

// Default route
app.get('/', (req, res) => {
    res.send("Email functionality with Nodemailer!");
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
