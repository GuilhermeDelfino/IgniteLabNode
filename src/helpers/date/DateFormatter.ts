export type LocalDate = 'pt-BR' | 'en-US';
export class DateFormatter {
    static formatDateTime(date: Date, format: LocalDate = 'pt-BR'): string {
        const formatedDate = date.toLocaleString(format);
        return formatedDate;
    }
}
