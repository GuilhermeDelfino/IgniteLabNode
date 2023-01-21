import { DateFormatter } from './DateFormatter';

describe('Helpers: DateFormatter', () => {
    it('should be return formated date in brazilian mode', () => {
        const date = new Date();
        expect(DateFormatter.formatDateTime(date)).toEqual(
            date.toLocaleString('pt-BR')
        );
    });
    it('should be return formated date in united states mode', () => {
        const date = new Date();
        expect(DateFormatter.formatDateTime(date, 'en-US')).toEqual(
            date.toLocaleString('en-US')
        );
    });
});
