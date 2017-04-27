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
        compareUser(friendsArray); 
        return res.json(friendsArray);
        return res.json(true);
    });


// const apiRoutes = (app, express) => {
//     app.get("/api/friends", (req, res) => {
//         console.log(friendsArray);
//         return res.json(friendsArray);
//     });
//     app.post("/api/friends", (req, res) => {
//         const results = req.body;
//         console.log(`params: ${req}`);
//         console.log(`results: ${JSON.stringify(results)}`);
//         const newArray = [];
//         friendsArray.push(newArray);
//         const scoreDifference = [];
//         const difference = friendsArray.map(item => {
//             return item.scores;
//         });
//         console.log(`friends: ${friendsArray}`);
//         const compareUser = () => {
//             for (let i = 0; i < difference[0].length; i++) {
//                 const scoreDifference = (Math.abs(difference[0][i] - difference[1][i]));
//                 newArray.push(scoreDifference);
//             }
//             console.log(`scoreDifference: ${scoreDifference}`);
//         };
//         return res.json(true);
//     });
// }
// 
// module.exports = {
//     apiRoutes: apiRoutes
// }

module.exports = router;
