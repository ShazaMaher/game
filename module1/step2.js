// Step 2: Use object to store player info and display team score
// - Create player object
// - Calculate score and display
// - Calculate total team scroe and display
// - Try to follow naming covention : https://www.w3schools.com/js/js_conventions.asp


/** Example: Create an Object

let player1 = {
	name: 'Abed',
  digit: 22, // first 2 digit of your mobile number
  zone: 2 // Bus zone number of place that you are living now 
	}
*/


console.log('****************** ___ Number Game ____ *******************');
console.log('*************** ___ Find the highest scored team ____ ***********');

// Team-1
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

let score1 = player1.digit * player1.zone;
let score2 = player2.digit * player2.zone;
let score3 = player3.digit * player3.zone;
let totalScoreForTeam1 = score1 + score2 + score3;

console.log('_____ TEAM 1 ______');
console.log('Hello ' + player1.name + '!' + ' Your points: ' + score1);
console.log('Hello ' + player2.name + '!' + ' Your points: ' + score2);
console.log('Hello ' + player3.name + '!' + ' Your points: ' + score3);
console.log('Total score: ' + totalScoreForTeam1);


// Team-2
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

let score4 = player4.digit * player4.zone;
let score5 = player5.digit * player5.zone;
let score6 = player6.digit * player6.zone;
let totalScoreForTeam2 = score4 + score5 + score6;

console.log('_____ TEAM 2 ______');
console.log('Hello ' + player4.name + '!' + ' Your points: ' + score4);
console.log('Hello ' + player5.name + '!' + ' Your points: ' + score5);
console.log('Hello ' + player6.name + '!' + ' Your points: ' + score6);
console.log('Total score: ' + totalScoreForTeam2);


// Team-3
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

let score7 = player7.digit * player7.zone;
let score8 = player8.digit * player8.zone;
let score9 = player9.digit * player9.zone;
let totalScoreForTeam3 = score7 + score8 + score9;

console.log('_____ TEAM 3 ______');
console.log('Hello ' + player7.name + '!' + ' Your points: ' + score7);
console.log('Hello ' + player8.name + '!' + ' Your points: ' + score8);
console.log('Hello ' + player9.name + '!' + ' Your points: ' + score9);
console.log('Total score: ' + totalScoreForTeam3);

// Winner
console.log('_____________ *** TEAM 2 wins! *** _________________');
