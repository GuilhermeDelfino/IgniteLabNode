import { ReadNotification } from '@app/useCases/readNotification';
import { SendNotification } from '@app/useCases/sendNotification';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiParam } from '@nestjs/swagger';
import { SendNotificationDto } from '../dtos/SendNotificationDto';

@Controller('notification')
export class NotificationController {
    constructor(
        private readonly sendNotificationUseCase: SendNotification,
        private readonly readNotificationUseCase: ReadNotification
    ) {}

    @ApiParam({
        name: 'notificationId',
        example: 'notification-id',
        required: true,
    })
    @Get('read/:notificationId')
    async readNotification(
        @Param('notificationId')
        notificationId: string
    ) {
        await this.readNotificationUseCase.execute({ notificationId });
    }
    @Post('send')
    async sendNotification(@Body() body: SendNotificationDto): Promise<void> {
        await this.sendNotificationUseCase.execute(body);
    }
}
