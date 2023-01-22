import { Notification } from '@app/entities/notification';
import { NotificationRepository } from '@app/repositories/NotificationRepository';
import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';

@Processor('notification')
export class NotificationBullProcessor {
    constructor(private readonly repo: NotificationRepository) {}

    @Process('send')
    async sendNotificationJob(job: Job, err: Error) {
        console.log('processando a notificacao');
        console.error(err);
        await this.repo.create(job.data as Notification);
    }
}
