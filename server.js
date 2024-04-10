const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.post('/send-email', (req, res) => {
    const { fullName, email, message } = req.body;

    const transporter = nodemailer.createTransport({
        host: 'smtp.office365.com',
        port: 587,
        secure: false,
        auth: {
            user: 'tiagomiguel03@outlook.com',
            pass: 'Azulazul7_77',
        },
    });
    const mailOptions = {
        from: email,
        to: 'tiagomiguel03@outlook.com',
        subject: 'New Form Submission',
        text: `Full Name: ${fullName}\nEmail: ${email}\nMessage: ${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error("Error sending email:", error);
            res.status(500).send("Error sending email");
        } else {
            console.log("Email sent:", info.response);
            res.status(200).send("Email sent successfully");
        }
    });
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});