import { Module } from '@nestjs/common';
import { Logger } from './Logger';
import { NestLogger } from './NestLogger.service';

@Module({
    providers: [{ provide: Logger, useClass: NestLogger }],
    exports: [Logger],
})
export class LoggerModule {}
