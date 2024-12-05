const express = require("express");
const nodemailer = require("nodemailer");

const app = express();
const PORT = 3000;

// Nodemailer configuration
const transporter = nodemailer.createTransport({
  service: "gmail", // Email provider (e.g., Gmail, Outlook, Yahoo)
  auth: {
    user: "your_email@gmail.com", // Your email address
    pass: "your_email_password", // Your email password or app password
  },
});

// Route to send an email
app.get("/send-email", async (req, res) => {
  try {
    // Define the email content
    const mailOptions = {
      from: "your_email@gmail.com", // Sender's email address
      to: "recipient_email@example.com", // Recipient's email address
      subject: "Welcome to Nodemailer", // Email subject
      text: "Hello! This is a test email sent using Nodemailer in Node.js.", // Plain text body
      html: "<h1>Hello!</h1><p>This is a test email sent using <b>Nodemailer</b> in Node.js.</p>", // HTML body
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);

    console.log("Email sent: ", info.response); // Log the result of the email sending
    res.status(200).send("Email sent successfully!");
  } catch (error) {
    console.error("Error sending email: ", error); // Log the error if sending fails
    res.status(500).send("Failed to send email.");
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
