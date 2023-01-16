import { IStringValidator, StringValidator } from '@app/validations/string';

export class Content {
    private _value: string;
    static MAX_LENGTH = 100;
    static MIN_LENGTH = 4;

    private constructor(validator?: IStringValidator) {
        this._value = validator
            .validateValueHasMin(Content.MIN_LENGTH)
            .validateValueHasMax(Content.MAX_LENGTH)
            .validateIsJustString().value;
    }
    static of(content: string, validator?: IStringValidator): Content {
        if (!validator) {
            validator = new StringValidator(content);
        }
        return new Content(validator);
    }

    get value() {
        return this._value;
    }
}
