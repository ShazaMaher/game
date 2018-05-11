/**
 * @description Display player's line by console.log
 * @param {object} player - The player object should contain name, digit, zone
 * @returns none 
 */
function sayHello(player) {
    // TODO
}

/**
 * @description Calculate player points
 * @param {object} player - The player object should contain name, digit, zone
 * @returns {number} Score of the player, multiple digit and zone
 */
function getScore(player) {
    return player.digit * player.zone;
}

/**
 * @description Calculate team total score
 * @param {object} team - team object contains players information
 * @returns none
 */
function generateTeamScore(team) {
    let totalScore = 0;
    team.players.forEach(function (player) {
        totalScore = totalScore + getScore(player);
    });
    team.totalTeamScore = totalScore;
}

/**
 * @description Display team summary
 * @param {string} team - Team name
 * @returns none
 */
function displayTeam(team) {
    generateTeamScore(team); // to calculate and store team score
    team.players.forEach(player => sayHello(player));
}

/**
 * @description Find winner and show the winner team info
 * @returns none
 */
function displayWinner() {
    let winner;
    // Firstly check if Team 1 is winner or not
    // Seconly check if Team 2 is winner or not
    // Otherwise Team 3 is the default winner
    // Bug: in the following logic there is bug, if more than one have has equal score if doesn't work
    // For now lets keep it simple, we will be fix the bug in later step  

    if (team1.totalTeamScore > team2.totalTeamScore && team1.totalTeamScore > team3.totalTeamScore) {
        winner = team1;

    } else if (team2.totalTeamScore > team1.totalTeamScore && team2.totalTeamScore > team3.totalTeamScore) {
        winner = team2;
    } else {
        winner = team3;
    }
}