export class MaxLengthError extends Error {
    constructor(message = 'Max Length Error') {
        super(message);
        this.name = 'MaxLengthError';
    }
}
