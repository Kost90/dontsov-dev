'use server'
import nodemailer from "nodemailer";

let transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_FROM_SEND,
    pass: process.env.APP_PASSWORD,
  },
});

export async function SendEmail(data: {
  name: string;
  email: string;
  message: string;
}) {
  let mailOptions = {
    from: "Portfolio web site",
    to: process.env.EMAIL_TO_SEND,
    subject: `Надіслано від ${data?.name}`,
    html: `<h1>Надіслано від ${data.name}</h1>
              <h3>Email: ${data.email}</h3>
              <h3>Повідомлення: ${data.message}</h3>`,
  };
  transport.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}
