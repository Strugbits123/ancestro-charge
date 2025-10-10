// lib/sendGrid.ts
import sgMail, { MailService } from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

export default sgMail as MailService;
