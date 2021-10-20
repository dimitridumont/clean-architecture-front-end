const { pathsToModuleNameMapper } = require("ts-jest/utils");
const { compilerOptions } = require("./tsconfig.json");

module.exports = {
	preset: "ts-jest",
	testEnvironment: "node",
	roots: ["<rootDir>"],
	modulePaths: ["<rootDir>"],
	moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
	testMatch: ["<rootDir>/src/**/*?(*.)+(spec|test).[jt]s?(x)"],
};
