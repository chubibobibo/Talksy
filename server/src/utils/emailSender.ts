import sgMail from "@sendgrid/mail";
import dotenv from "dotenv";
import { createWelcomeEmailTemplate } from "./welcomeEmail.js";
dotenv.config();
if (process.env.TWILIO_API) {
  sgMail.setApiKey(process.env.TWILIO_API);
}

export const mailSender = (
  dest: string,
  destName: string,
  sender: string,
  subject: string
) => {
  const msg = {
    to: dest, // Change to your recipient
    from: sender, // Change to your verified sender
    subject: subject,
    text: "and easy to do anywhere, even with Node.js",
    html: createWelcomeEmailTemplate(destName, "http://localhost:5173/login"),
  };
  return msg;
};
