import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { EmailService } from './email.service';

@Controller()
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @EventPattern({ cmd: 'send_email' })
  async handleSendEmail(data: { email: string; message: string }) {
    await this.emailService.sendEmail(data.email, data.message);
  }
}
