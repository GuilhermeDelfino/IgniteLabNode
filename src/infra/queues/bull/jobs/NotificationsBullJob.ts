import { Notification } from '@app/entities/notification';
import { NotificationsJobs } from '@app/jobs/NotificationJobs';
import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Logger } from '@src/infra/util/Logger/Logger';
import { Queue } from 'bull';
import { BullNotificationMapper } from '../mappers/BullNotificationMapper';
@Injectable()
export class NotificationsBullJobs extends NotificationsJobs {
    constructor(
        @InjectQueue('notification') private notificationQueue: Queue,
        private readonly logger: Logger
    ) {
        super();
    }
    async sendNotificationJob(notification: Notification): Promise<void> {
        this.notificationQueue.add(
            'send',
            BullNotificationMapper.toStaticAttributes(notification),
            { delay: 2000, attempts: 5, priority: 2 }
        );
        this.logger.log('Job Added in notification Queue with name send');
    }
}
