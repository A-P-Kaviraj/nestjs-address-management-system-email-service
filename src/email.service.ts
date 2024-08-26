import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailService {
  async sendEmail(email: string, message: string) {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'your-email@example.com',
        pass: 'your-password',
      },
    });

    await transporter.sendMail({
      from: '"NestJS App" <your-email@example.com>',
      to: email,
      subject: 'Address Added',
      text: message,
    });

    console.log(`Email sent to ${email}`);
  }
}
