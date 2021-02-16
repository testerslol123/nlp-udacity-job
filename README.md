# Natural Language Processing - Development with Webpack
This projects calls a NLP APi and displays the results of a provided link.

## Compiling the app - Runnin the Server
The projects has 4 commands that can be used at different times.

### npm start
Starts the server on port 3000 as specified on .env file

### npm run build-dev
Builds the development dist folder - no minimization

### npm run build-prod
Builds the production dist folder

### npm run launch
Builds the production dist folder and starts the server on port 3000


```json
"scripts": {
    "start": "nodemon src/server/server.js",
    "build-dev": "webpack --config ./src/webpack.dev.js",
    "build-prod": "webpack --config ./src/webpack.prod.js",
    "launch" : "webpack --config ./src/webpack.prod.js && node src/server/server.js"
  }
'''
