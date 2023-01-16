export enum Categories {
    SIMPLE = 'Simple',
    PRIORITY = 'Priority',
    ALERT = 'Alert',
    RELEVANT = 'Relevant',
}
export class Category {
    private _value: Categories;

    private constructor(category: Categories) {
        this._value = category;
    }
    static of(category: Categories): Category {
        return new Category(category);
    }

    get value() {
        return this._value;
    }
}
