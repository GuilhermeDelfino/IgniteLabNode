export class JustStringError extends Error {
    constructor(message = 'The string must be just string') {
        super(message);
        this.name = 'JustStringError';
    }
}
