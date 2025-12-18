import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export const sendEmail = async (options) => {
  try {
    await transporter.verify();
  } catch (err) {
    console.error('SMTP verify failed:', err.message);
  }

  try {
    return await transporter.sendMail(options);
  } catch (err) {
    console.error('EMAIL SEND ERROR:', err);
    throw err;
  }
};
