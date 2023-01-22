import { Module } from '@nestjs/common';
import { QueueBullModule } from './bull/QueueBull.module';

@Module({
    imports: [QueueBullModule],
    exports: [QueueBullModule],
})
export class QueueModule {}
