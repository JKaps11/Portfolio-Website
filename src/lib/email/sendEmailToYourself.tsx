import nodemailer from "nodemailer";

export interface ContactFormPayload {
  firstName: string;
  lastName: string;
  subject: string;
  message: string;
}

export async function sendEmailToSelf(data: ContactFormPayload): Promise<void> {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER!,
      pass: process.env.GMAIL_PASS!,
    },
  });

  const mailOptions = {
    from: process.env.GMAIL_USER!,
    to: process.env.GMAIL_USER!,
    subject: `Portfolio Website message from ${data.firstName} ${data.lastName}: ${data.subject}`,
    text: data.message,
  };

  await transporter.sendMail(mailOptions);
}
