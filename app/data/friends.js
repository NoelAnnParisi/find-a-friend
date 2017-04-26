export friendsArray = [];
export results = [];
const difference = friendsArray.map(item => {
    return item.scores
})
console.log("diff", difference);
for (let i = 0; i < difference[0].length; i++) {
    const gogo = (Math.abs(difference[0][i] - difference[1][i]));
    results.push(gogo);
}
