import { Notification } from '@app/entities/notification';
import { NotificationsJobs } from '@app/jobs/NotificationJobs';
import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';
import { BullNotificationMapper } from '../mappers/BullNotificationMapper';
@Injectable()
export class NotificationsBullJobs extends NotificationsJobs {
    constructor(@InjectQueue('notification') private notificationQueue: Queue) {
        super();
    }
    async sendNotificationJob(notification: Notification): Promise<void> {
        this.notificationQueue.add(
            'send',
            BullNotificationMapper.toStaticAttributes(notification),
            { delay: 500, attempts: 5, priority: 2 }
        );
    }
}
