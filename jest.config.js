module.exports = {
  preset: "@vue/cli-plugin-unit-jest/presets/no-babel",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
  },
  testMatch: ["<rootDir>/tests/**/*.spec.js"],
};
