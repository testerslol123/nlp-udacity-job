# Natural Language Processing - Development with Webpack
This app takes user input in the form of a URL, calls the **Meaningcloud API**, and displays the call results.
The app is compiled using <a href="https://webpack.js.org/">Webpack</a>.

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
```

## Webpack Dev Server Notes
The app calls the NLP API server-side using the function below in _server.js_:

```js

app.post('/api', async (req, res) => {

  const sent_url = `https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&lang=en&url=${req.body.url}&model=general`;
  console.log(sent_url);


  await axios
    .get(sent_url)
    .then((data) => {
      const dataPackage = createPackage(data.data);
      console.log(dataPackage);
      res.send(dataPackage);
    })

    .catch((error) => {
      console.log('ERROR');
      console.log(error);
    });
});

app.get('/', (req, res) => {
  res.send({});
});


```
### Testing the app with dev-server
In order to test the full functionality of the app, **you must run server.js** as well as the dev server.

