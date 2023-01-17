export enum Categories {
    SIMPLE = 'Simple',
    PRIORITY = 'Priority',
    ALERT = 'Alert',
    RELEVANT = 'Relevant',
}

export function findCategoryEnum(category: string): Categories {
    return Categories[
        Object.keys(Categories)[
            Object.values(Categories).findIndex((c) => c === category)
        ]
    ];
}
