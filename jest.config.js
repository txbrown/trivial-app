module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  roots: ["<rootDir>"],
  // transformIgnorePatterns: [
  //   "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)"
  // ],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"],
  transform: {
    "^.+\\.ts": "ts-jest"
  },
  testPathIgnorePatterns: ["<rootDir>/node_modules/"],
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.spec.json"
    }
  }
};
