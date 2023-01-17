import { HttpException, HttpStatus } from '@nestjs/common';

export class CategoryNotFoundException extends HttpException {
    constructor() {
        super(
            'Category Not Found. See the enum in docs',
            HttpStatus.BAD_REQUEST
        );
        this.name = 'CategoryNotFounException';
    }
}
