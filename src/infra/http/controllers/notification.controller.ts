import { SendNotification } from '@app/useCases/sendNotification';
import { Body, Controller, Post } from '@nestjs/common';
import { SendNotificationDto } from '../dtos/SendNotificationDto';

@Controller('notification')
export class NotificationController {
    constructor(private readonly sendNotificationUseCase: SendNotification) {}
    @Post('send')
    async sendNotification(@Body() body: SendNotificationDto): Promise<void> {
        await this.sendNotificationUseCase.execute(body);
    }
}
