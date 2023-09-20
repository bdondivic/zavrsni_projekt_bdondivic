module.exports = {
    transform: {
      "^.+\\.jsx?$": "babel-jest",
      "^.+\\.js$": "babel-jest"
    },
    transformIgnorePattern: [
        '<rootDir>/node_modules/(?!axios)/'
       ],
       moduleNameMapper: {
        '^axios$': require.resolve('axios'),
        "axios": "axios/dist/node/axios.cjs",
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "./src/tests/FileMock.js",
        "\\.(css|less|scss)$": "<rootDir>/src/tests/StyleMock.js"
      },
      testEnvironment: 'jsdom',
      type: "module",
  };
  