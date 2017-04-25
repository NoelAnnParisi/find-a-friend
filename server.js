const express = require('express');
const body = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

let friendsArray = [];
// Sets up the Express app to handle data parsing
app.use(body.json());
app.use(body.urlencoded({
    extended: true
}));
app.use(body.text());
app.use(body.json({
    type: "application/vnd.api+json"
}));

app.get("/", function(req, res) {
    return res.sendFile(path.join(__dirname, "/app/public/index.html"));
});

app.get("/survey", function(req, res) {
    return res.sendFile(path.join(__dirname, "/app/public/survey.html"));
});

app.listen(PORT, () => {
    console.log("App listening on PORT " + PORT);
});

app.get("/api/friends", (req, res) => {
    console.log(friendsArray);
    return res.json(friendsArray);
});

app.post("/api/friends", (req, res) => {
    const results = req.body;
    console.log(`params: ${req}`);
    console.log(`results: ${JSON.stringify(results)}`);
    friendsArray.push(results);
    console.log(`friends: ${friendsArray}`);
    return res.json(true);
});
