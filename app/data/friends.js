const friendsArray = [{
    "name": "Ahmed",
    "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores": [
        2,
        2,
        2,
        1,
        1,
        2,
        2,
        2,
        5,
        5
    ]
},{
    "name": "George",
    "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores": [
        1,
        1,
        1,
        3,
        3,
        4,
        4,
        4,
        5,
        5
    ]
},
{
    "name": "Nikki",
    "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores": [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        4,
        4,
        4
    ]
}

];

function add(auguend, addend) {
  return parseInt(auguend) + parseInt(addend); 
}

function compareUser(friendsArr) {
  const suitors = []; 
  let suitor; 
  if (friendsArr.length > 1) {
    const scores = friendsArr.map(item => {
      return item.scores;
    });
    const minuend = scores.splice(scores.length - 1, 1)[0].reduce(add, 0);
    console.log(`minuend: ${minuend}`);
    for (let i = 0; i < scores.length; i++) {
      subtrahend = scores[i].reduce(add, 0);
      suitors.push(Math.abs(minuend - subtrahend)); 
    }
    let suitor = suitors[0]; 
    for (let i = 1; i < suitors.length; i++) {
      let candidate = suitors[i]
      if (suitor > candidate) {
        suitor = candidate; 
      }
    }
    let matchName = friendsArray[suitors.indexOf(suitor)].name;
    console.log(matchName);
    return matchName;
  }
  return; 
}

module.exports = {
    friendsArray: friendsArray,
    compareUser: compareUser
}
