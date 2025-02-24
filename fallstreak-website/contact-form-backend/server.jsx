require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// SMTP transporter setup
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST, // e.g., smtp.gmail.com
    port: process.env.SMTP_PORT, // 587 for Gmail (non-SSL)
    secure: false, // Use TLS
    auth: {
        user: process.env.SMTP_USER, // Your email address (e.g., your-email@gmail.com)
        pass: process.env.SMTP_PASS, // Your email password (or app-specific password)
    },
});

// POST endpoint to handle form submission
app.post("/send-email", async (req, res) => {
    const { name, email, phone, message } = req.body;

    // Validate incoming data
    if (!name || !email || !phone || !message) {
        return res.status(400).json({
            success: false,
            message: "All fields are required",
        });
    }

    try {
        // Send email
        await transporter.sendMail({
            from: email, // Sender's email (user's email from the form)
            to: "donaldjaweed+fallstreak@gmail.com", // Your email address to receive the message
            subject: `New Contact Form Submission from ${name}`,
            text: `
                You have received a new contact form submission.

                Name: ${name}
                Email: ${email}
                Phone: ${phone}
                Message: ${message}
            `, // Plain text body including the user's email, phone, and message
            html: `
                <p>You have received a new contact form submission.</p>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Message:</strong> ${message}</p>
            `, // HTML version of the message with the user's email, phone, and message
            replyTo: email, // The user's email so you can reply directly to them
        });

        // Respond with success if email sent
        res.status(200).json({ success: true, message: "Email sent successfully" });
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({
            success: false,
            message: "Failed to send email. Please try again.",
        });
    }
});


// Test endpoint for direct email check
app.get("/test-email", async (req, res) => {
    try {
        await transporter.sendMail({
            from: process.env.SMTP_USER,
            to: "donaldjaweed+fallstreak@gmail.com", // Replace with your email
            subject: "Test Email",
            text: "This is a test email.",
        });
        res.status(200).send("Test email sent successfully");
    } catch (error) {
        console.error("Test email failed", error);
        res.status(500).send("Test email failed");
    }
});

// Start the server
const PORT = process.env.PORT || 3500;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
