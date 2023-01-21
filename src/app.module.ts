import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { HttpModule } from './infra/http/http.module';

@Module({
    imports: [
        HttpModule,
        BullModule.forRoot({
            redis: {
                host: 'localhost',
                port: 6379,
            },
        }),
    ],
})
export class AppModule {}
