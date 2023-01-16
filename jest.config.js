/** @type {import('jest').Config} */
const config = {
    moduleFileExtensions: ['js', 'json', 'ts'],
    rootDir: './',
    testRegex: '.*\\.(spec|test)\\.ts$',
    transform: {
        '^.+\\.(t|j)s$': ['@swc/jest'],
    },
    collectCoverageFrom: ['src/**/*.(t|j)s'],
    coverageDirectory: './coverage',
    testEnvironment: 'node',
    moduleNameMapper: {
        '@app(.*)': '<rootDir>/src/app/$1',
        '@test(.*)': '<rootDir>/test/$1',
        '@helpers(.*)': '<rootDir>/src/helpers/$1',
        '@src(.*)': '<rootDir>/src/$1',
    },
};
module.exports = config;
