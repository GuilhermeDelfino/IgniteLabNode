import { ConsoleLogger, Injectable } from '@nestjs/common';
import { Logger } from './Logger';

@Injectable()
export class NestLogger extends Logger {
    Logger;
    private logger = new ConsoleLogger();
    log(val: any) {
        this.logger.log('- ' + val);
    }
    error(val: any) {
        this.logger.error('- ' + val);
    }
    warning(val: any) {
        this.logger.warn('- ' + val);
    }
    debug(val: any) {
        this.logger.debug('- ' + val);
    }
}
