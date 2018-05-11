// Step 4: Find the winner team

/* Example: condition : https://www.w3schools.com/js/js_if_else.asp

  if (condition1) {
    block of code to be executed if condition1 is true
  } else if (condition2) {
    block of code to be executed if the condition1 is false and condition2 is true
  } else {
    block of code to be executed if the condition1 is false and condition2 is false
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


let winner;
// Firstly check if Team 1 is winner or not
// Seconly check if Team 2 is winner or not
// Otherwise Team 3 is the default winner
// Bug: in the following logic there is bug, if more than one have has equal score if doesn't work
// For now lets keep it simple, we will be fix the bug in later step  
if (totalScoreForTeam1 > totalScoreForTeam2 && totalScoreForTeam1 > totalScoreForTeam3) {
  winner = 'TEAM 1';
} else if (totalScoreForTeam2 > totalScoreForTeam1 && totalScoreForTeam2 > totalScoreForTeam3) {
  winner = 'TEAM 2';
} else {
  winner = 'TEAM 3';
}

console.log('_____________ *** ' + winner + ' wins! *** _________________');
