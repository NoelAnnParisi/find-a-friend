const express = require('express'),
    router = express.Router(),
    app = express(),
    { friendsArray, compareUser } = require('../data/friends.js');

var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
    type: "application/vnd.api+json"
}));

router
    .get("/friends", (req, res) => {
        return res.json(friendsArray);
    })
    .post("/friends", (req, res) => {
        friendsArray.push(req.body);
        return res.json(compareUser(friendsArray));
    });
    
module.exports = router;
