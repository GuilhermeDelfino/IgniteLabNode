import { HttpException, HttpStatus } from '@nestjs/common';

export class NotificationNotFoundException extends HttpException {
    constructor() {
        super('Notification Not Found', HttpStatus.NOT_FOUND);
        this.name = 'NotificationNotFounException';
    }
}
