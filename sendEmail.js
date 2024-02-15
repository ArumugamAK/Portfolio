const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const port = 3001; 
app.use(express.json());
app.use(cors());
app.post('/sendEmail', async (req, res) => {
    const { email, message } = req.body;

    // Send email using nodemailer
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth :{
          user : 'arumugamak.21cse@kongu.edu',
          pass : 'arun2003'
      }
    });

    var mailOptions = {
      from : 'arumugamak.21cse@kongu.edu', // replace with your email
        to: email,
        subject: 'Email from React App',
        html: `<h1>${message}</h1>`
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
        res.status(200).json({ success: true });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ success: false, error: 'Email not sent' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
