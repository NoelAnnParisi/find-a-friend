const express = require('express');
const body = require('body-parser');
const path = require('path');
const { htmlRoutes } = require('./app/routing/htmlRoutes.js');
const apiRoutes = require('.app/routing/apiRoutes.js');

const app = express();
const PORT = 3000;


// Sets up the Express app to handle data parsing
app.use(body.json());
app.use(body.urlencoded({
    extended: true
}));
app.use(body.text());
app.use(body.json({
    type: "application/vnd.api+json"
}));

app.listen(PORT, () => {
    console.log("App listening on PORT " + PORT);
});

htmlRoutes(app, express);

