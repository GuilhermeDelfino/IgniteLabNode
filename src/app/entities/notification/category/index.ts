import { CategoryNotFoundError } from '@app/validations/errors/CategoryNotFoundError';

export enum Categories {
    SIMPLE = 'Simple',
    PRIORITY = 'Priority',
    ALERT = 'Alert',
    RELEVANT = 'Relevant',
}

export function findCategoryEnum(category: string): Categories {
    const categoryEnum =
        Categories[
            Object.keys(Categories)[
                Object.values(Categories).findIndex((c) => c === category)
            ]
        ];

    if (!categoryEnum || categoryEnum === null) {
        throw new CategoryNotFoundError();
    }
    return categoryEnum;
}
