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
        user: process.env.SMTP_USER, // Your email address
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
            to: process.env.RECIPIENT_EMAIL, // Recipient email address from environment variable
            subject: `New Contact Form Submission from ${name}`,
            text: `
                You have received a new contact form submission.

                Name: ${name}
                Email: ${email}
                Phone: ${phone}
                Message: ${message}
            `,
            html: `
                <p>You have received a new contact form submission.</p>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Message:</strong> ${message}</p>
            `,
            replyTo: email, // So you can reply directly to the user
        });

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
            to: process.env.RECIPIENT_EMAIL, // Using the environment variable for recipient
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
