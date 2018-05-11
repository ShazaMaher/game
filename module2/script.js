/**
 * @description Display player's line by console.log
 * @param {object} player - The player object should contain name, digit, zone
 * @returns none 
 */
function sayHello(player) {
    const player1Row = document.getElementById('player-' + player.id);

    const playerRowTemplate = `
                <td>${player.name}</td>
                <td class="text-center">${getScore(player)}</td>
    `;
    player1Row.innerHTML = playerRowTemplate;
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

    document.getElementById('find-winner').style.display = 'none';
    document.getElementById('winner').style.display = 'block';

    let winnerTeamDiv = document.getElementById('winner-team');
    let displayPlayer = '';

    winner.players.forEach(player => {
        displayPlayer += player.name + ' ';
    });

    winnerTeamDiv.innerHTML = `
     <h2 id="winner-team">${winner.name}</h2>
      <p id="winner-score" class="lead">Totoal Score: ${winner.totalTeamScore}</p>
      <p>${displayPlayer}</p>
     `; 
     
     resetAllTeamsPlayers();
}

function FormTeam(){
    
    const inputUser = document.querySelector('input#usernameText');
    const user = inputUser.value;
    console.log(user);
   let userPlayer = matchUserName(user);
   console.log(userPlayer);
    

    if(team1.numPlayers <= 3)
    {
        
        if(userPlayer.included !== 1){
            team1.players.push(userPlayer);
            team1.numPlayers ++;
            userPlayer.included=1;
            const tr = document.getElementById("player-"+(team1.numPlayers));
            tr.innerHTML =`<td>${userPlayer.name}</td>
                           <td class="text-center>${getScore(userPlayer)}</td>`;
          
            console.log(team1);
        }else{
            window.alert("this user is part of the game, please enter another user");
        }
    }
    else if(team2.numPlayers <= 3)
    {
        if(userPlayer.included !== 1){
            team2.players.push(userPlayer);
            team2.numPlayers ++;
            userPlayer.included=1;
            const tr = document.getElementById("player-"+(team1.numPlayers+team2.numPlayers));
            tr.innerHTML =`<td>${userPlayer.name}</td>
                           <td class="text-center>${getScore(userPlayer)}</td>`;
          
            console.log(team2);
        }
        else{
            window.alert("this user is part of the game, please enter another user");
        }
    }
    else if(team3.numPlayers <= 3)
    {
        if(userPlayer.included !== 1){
            team3.players.push(userPlayer);
            team3.numPlayers ++;
            userPlayer.included=1;
            const tr = document.getElementById("player-"+(team1.numPlayers+team2.numPlayers+team3.numPlayers));
            tr.innerHTML =`<td>${userPlayer.name}</td>
                           <td class="text-center>${getScore(userPlayer)}</td>`;
          
            console.log(team3);
        }
        else{
            window.alert("this user is part of the game, please enter another user");
        }
    }
    else{
        window.alert("you have formed you team, please check the winner");
    }
}


function matchUserName(user){
    
    for(const player of players){
        if(user===player.name)
        {
           return player;
        }
    }
}

function resetAllTeamsPlayers(){
    team1.players.splice(0,2);
    console.log(team1.players);
    team2.players.splice(0,2);
    console.log(team2.players);
    team3.players.splice(0,2);
    console.log(team3.players);
}

function getNumOfplayerInTheGame(){
    let num;


    num= team1.numPlayers + team2.numPlayers + team3.numPlayers;
    return num;
}