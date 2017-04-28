const friendsArray = [{
    "name": "Ahmed",
    "photo": "https://cdn.pixabay.com/photo/2014/12/17/00/21/turkey-570935__340.jpg",
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
    "photo": "https://cdn.pixabay.com/photo/2014/04/03/10/32/businessman-310819__340.png",
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
    "photo": "https://cdn.pixabay.com/photo/2015/04/17/09/36/domestic-cat-726989__340.jpg",
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

    const match = {
    	name: friendsArray[suitors.indexOf(suitor)].name,
    	image: friendsArray[suitors.indexOf(suitor)].photo
    };

    return match;
  }
  // should be returning error here
  return; 
}

module.exports = {
    friendsArray: friendsArray,
    compareUser: compareUser
}
