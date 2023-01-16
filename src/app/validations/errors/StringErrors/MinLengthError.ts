export class MinLengthError extends Error {
    constructor(message = 'Min Length Error') {
        super(message);
        this.name = 'MinLengthError';
    }
}
