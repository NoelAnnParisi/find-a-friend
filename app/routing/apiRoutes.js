// Your apiRoutes.js file should contain two routes:
// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. 
// This route will also be used to handle the compatibility logic.

// app.get("/", function(req, res) {
//     return res.sendFile(path.join(__dirname, "/app/public/index.html"));
// });

// app.get("/survey", function(req, res) {
//     return res.sendFile(path.join(__dirname, "/app/public/survey.html"));
// });

const { friendsArray } = require('./data/friends.js');



export app.get("/api/friends", (req, res) => {
    console.log(friendsArray);
    return res.json(friendsArray);
});

export app.post("/api/friends", (req, res) => {
    const results = req.body;
    console.log(`params: ${req}`);
    console.log(`results: ${JSON.stringify(results)}`);
    friendsArray.push(results);
    console.log(`friends: ${friendsArray}`);
    return res.json(true);
});

