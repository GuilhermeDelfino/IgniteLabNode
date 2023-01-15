/** @type {import('jest').Config} */
const config = {
    moduleFileExtensions: ['js', 'json', 'ts'],
    rootDir: './',
    testRegex: '.*\\.spec\\.ts$',
    transform: {
        '^.+\\.(t|j)s$': ['@swc/jest'],
    },
    collectCoverageFrom: ['**/*.(t|j)s'],
    coverageDirectory: '../coverage',
    testEnvironment: 'node',
    moduleNameMapper: {
        '@app(.*)': '<rootDir>/src/app/$1',
        '@test(.*)': '<rootDir>/test/$1',
    },
};
module.exports = config;
