import {
    JustStringError,
    MaxLengthError,
    MinLengthError,
} from '@app/validations/errors/StringErrors';
import { Content } from '.';

describe('Entity: Notification Content', () => {
    it('should be able to create a content', () => {
        expect(() => Content.of('Conteudo')).toBeTruthy();
        expect(Content.of('Conteudo').value).toBe('Conteudo');
        expect(() => Content.of('Conteudo')).not.toThrow();
    });
    it('should be throw MinLengthError', () => {
        expect(() => Content.of('C'.repeat(Content.MIN_LENGTH - 1))).toThrow(
            MinLengthError,
        );
    });
    it('should be throw MaxLengthError', () => {
        expect(() => Content.of('C'.repeat(Content.MAX_LENGTH + 1))).toThrow(
            MaxLengthError,
        );
    });
    it('should be throw MaxLengthError', () => {
        expect(() => Content.of('Guilherme 123')).toThrow(JustStringError);
    });
});
