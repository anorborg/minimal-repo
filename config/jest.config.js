module.exports = {
    "rootDir": "../",
    "globals": {
        "ts-jest": {
          "tsConfigFile": "./config/tsconfig.test.json"
        }
    },
    "transform": {
        "^.+\\.tsx?$": "ts-jest"
    },
    "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
    "moduleFileExtensions": [
        "ts",
        "tsx",
        "js",
        "jsx",
        "json",
        "node"
    ],
    "moduleNameMapper": {
        "@app/(.*)": "<rootDir>/app/$1"
    }
};
