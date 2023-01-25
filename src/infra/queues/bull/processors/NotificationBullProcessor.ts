import { Notification } from '@app/entities/notification';
import { NotificationRepository } from '@app/repositories/NotificationRepository';
import { OnQueueError, Process, Processor } from '@nestjs/bull';
import { Logger } from '@src/infra/util/Logger/Logger';
import { Job } from 'bull';

@Processor('notification')
export class NotificationBullProcessor {
    constructor(
        private readonly repo: NotificationRepository,
        private readonly logger: Logger
    ) {}

    @OnQueueError()
    onError(job: Job, err: Error) {
        this.logger.error(
            `QUEUE ERROR IN JOB ${job.id} - DATA: ${job.data} - ERROR: ${err.message}`
        );
    }
    @Process('send')
    async sendNotificationJob(job: Job<Notification>, err: Error) {
        if (err.message) {
            this.logger.error(err.message);
        }
        this.logger.log('processing job send notification');
        this.logger.log(`notificatio ID = ${job.data.id}`);
        this.repo.create(job.data).finally(() => job.finished());
    }
}
