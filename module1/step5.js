// Step 5: Remove more duplicate code

/** Example: refactoring : google for 'javascript refactoring'
  good read: https://github.com/ryanmcdermott/clean-code-javascript#use-meaningful-and-pronounceable-variable-names
 
  There are tons of ideas on how to refactor code. But let's try some of the basic principles as below 
  - Use meaningful and pronounceable variable names
  - Remove duplicate code
  - Make code reusable
  - Code should be readable
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
 * @description Display player's line by console.log  
 * @param {object} player - The player object should contain name, digit, zone
 * @returns none 
 */
function sayHello(player) {
  console.log('Hello ' + player.name + '!' + ' Your points: ' + getScore(player));
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

/**
 * @description Calculate team total score
 * @param {number} score1 - Score of one player
 * @param {number} score2 - Score of second player
 * @param {number} score3 - Score of third player
 * @returns {number} Sum of three player point as team score 
 */
function teamScore(score1, score2, score3) {
  return score1 + score2 + score3;
}

/**
 * @description Display team summary
 * @param {string} team - Team name
 * @param {object} player1 - The player object should contain name, digit, zone
 * @param {object} player2 - The player object should contain name, digit, zone
 * @param {object} player3 - The player object should contain name, digit, zone
 * @returns {number} Team score
 */
function displayTeamAndReturnScore(team, player1, player2, player3) {
  let totalTeamScore = teamScore(getScore(player1), getScore(player2), getScore(player3));
  console.log('_____ ' + team + '  ______');
  sayHello(player1);
  sayHello(player2);
  sayHello(player3);
  console.log('Team score: ' + totalTeamScore);

  return totalTeamScore;
}

console.log('****************** ___ Number Game ____ *******************');
console.log('*************** ___ Find the highest scored team ____ ***********');

// Display teams summary and store in variable to find the winner
let totalScoreForTeam1 = displayTeamAndReturnScore('TEAM 1', player1, player2, player3);
let totalScoreForTeam2 = displayTeamAndReturnScore('TEAM 2', player4, player5, player6);
let totalScoreForTeam3 = displayTeamAndReturnScore('TEAM 3', player7, player8, player9);

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
