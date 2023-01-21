import { StringValidator } from '.';
import {
    JustStringError,
    MaxLengthError,
    MinLengthError,
} from '../errors/StringErrors';

describe('Validation: String Validator', () => {
    it('should not be return anyone error', () => {
        expect(() =>
            new StringValidator('Gui')
                .validateIsJustString()
                .validateValueHasMin(3)
                .validateValueHasMax(3),
        ).not.toThrow();
        expect(() =>
            new StringValidator('Gui Delfino')
                .validateIsJustString()
                .validateValueHasMin(3)
                .validateValueHasMax(100),
        ).not.toThrow();
    });

    it('should be throw MinLengthError', () => {
        expect(() =>
            new StringValidator('Gu')
                .validateIsJustString()
                .validateValueHasMin(3)
                .validateValueHasMax(100),
        ).toThrow(MinLengthError);
    });
    it('should be throw MaxLengthError', () => {
        expect(() =>
            new StringValidator('Guil')
                .validateIsJustString()
                .validateValueHasMin(1)
                .validateValueHasMax(3),
        ).toThrow(MaxLengthError);
    });
    it('should be throw JustStringError', () => {
        expect(() =>
            new StringValidator('Guilherme123')
                .validateIsJustString()
                .validateValueHasMin(1)
                .validateValueHasMax(100),
        ).toThrow(JustStringError);
        expect(() =>
            new StringValidator('Guilherme 123')
                .validateIsJustString()
                .validateValueHasMin(1)
                .validateValueHasMax(100),
        ).toThrow(JustStringError);
    });
});
