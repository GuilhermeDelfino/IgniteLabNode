import { regexJustString } from '@helpers/regex';
import {
    JustStringError,
    MaxLengthError,
    MinLengthError,
} from '../errors/StringErrors';

export interface IStringValidator {
    validateValueHasMin(min: number): IStringValidator;
    validateValueHasMax(max: number): IStringValidator;
    validateIsJustString(): IStringValidator;
}
export class StringValidator implements IStringValidator {
    private defaultMinLengthMessageError =
        'The value must be greather than min';
    private defaultMaxLengthMessageError = 'The value must be less than max';
    private defaultJustStringMessageError = 'The value must be only a string';

    constructor(private value: string) {}
    validateValueHasMin(min: number): IStringValidator {
        if (this.value.length < min) {
            throw new MinLengthError(this.defaultMinLengthMessageError);
        }
        return this;
    }
    validateValueHasMax(max: number): IStringValidator {
        if (this.value.length > max) {
            throw new MaxLengthError(this.defaultMaxLengthMessageError);
        }
        return this;
    }
    validateIsJustString(): IStringValidator {
        if (!regexJustString.test(this.value)) {
            throw new JustStringError(this.defaultJustStringMessageError);
        }
        return this;
    }
}
