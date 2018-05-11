// Step 3: Remove duplicate code using function

/** Example: Some best possible way to declare Function
  
// Function declaration
 function getScore(player){
   return player.digit * player.zone;
  }
  
// Function expression
var getScore = function(player) {   
   return player.digit * player.zone;;
}

// Arrow function
var getScore = (player) => {  
   return player.digit * player.zone;;
}
*/


// Data: Keeping all player data together for simplicity 
// Usually, data comes from the various source such as database, api, form, local disk file, etc
let player1 = {
  name: 'Obi',
  digit: 27,
  zone: 2
}

let player2 = {
  name: 'Haseeb',
  digit: 71,
  zone: 88
}

let player3 = {
  name: 'Sirin',
  digit: 28,
  zone: 2
}

let player4 = {
  name: "Shaza",
  digit: 76,
  zone: 200
}
let player5 = {
  name: "Hossein",
  digit: 52,
  zone: 31
}
let player6 = {
  name: "Anwer",
  digit: 47,
  zone: 2
}

let player7 = {
  name: 'Majid',
  digit: 50,
  zone: 30
}

let player8 = {
  name: 'Jackline',
  digit: 52,
  zone: 20
}

let player9 = {
  name: 'Mohammed',
  digit: 40,
  zone: 55
}

/**
 * @description Calculate player points
 * @param {object} player - The player object should contain name, digit, zone
 * @returns {number} Score of the player, multiple digit and zone
 */
function getScore(player) {
  const score = player.digit * player.zone;
  return score;
}

console.log('****************** ___ Number Game ____ *******************');
console.log('*************** ___ Find the highest scored team ____ ***********');

// Team 1
console.log('_____ TEAM 2 ______');
console.log('Hello ' + player1.name + ',' + ' Your points: ' + getScore(player1));
console.log('Hello ' + player2.name + '!' + ' Your points: ' + getScore(player2));
console.log('Hello ' + player3.name + '!' + ' Your points: ' + getScore(player3));

let totalScoreForTeam1 = getScore(player1) + getScore(player2) + getScore(player3);
console.log('Total score: ' + totalScoreForTeam1);

// Team 2
console.log('_____ TEAM 2 ______');
console.log('Hello ' + player4.name + '!' + ' Your points: ' + getScore(player4));
console.log('Hello ' + player5.name + '!' + ' Your points: ' + getScore(player5));
console.log('Hello ' + player6.name + '!' + ' Your points: ' + getScore(player6));

let totalScoreForTeam2 = getScore(player4) + getScore(player5) + getScore(player6);
console.log('Total score: ' + totalScoreForTeam2);

// Team 3
console.log('_____ TEAM 3 ______');
console.log('Hello ' + player7.name + '!' + ' Your points: ' + getScore(player7));
console.log('Hello ' + player8.name + '!' + ' Your points: ' + getScore(player8));
console.log('Hello ' + player9.name + '!' + ' Your points: ' + getScore(player9));

let totalScoreForTeam3 = getScore(player7) + getScore(player8) + getScore(player9);
console.log('Total score: ' + totalScoreForTeam3);


// Winner
console.log('_____________ *** TEAM 2 wins! *** _________________');
