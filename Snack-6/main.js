console.log('test');

//- Creare un array di oggetti di squadre di calcio.
//- Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
//- Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.

const soccerTeams = [
    { name: "Juventus", points: 0, fouls: 0 },
    { name: "Milan", points: 0, fouls: 0 },
    { name: "Inter", points: 0, fouls: 0 },
    { name: "Roma", points: 0, fouls: 0 },
    { name: "Napoli", points: 0, fouls: 0 },
    { name: "Cagliari", points: 0, fouls: 0 },
    { name: "Fiorentina", points: 0, fouls: 0 },
    { name: "Lazio", points: 0, fouls: 0 },
];

console.log(soccerTeams);

//- Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.

/**
 * This function can generate a random number from 0 to 10
 * @returns random number
 */
function randomNumber() {
    let ranNum = Math.floor(Math.random() * 10);
    return ranNum;
};

console.log(randomNumber());

soccerTeams.map(team => {
    return team.points = randomNumber(), team.fouls = randomNumber();
});

console.log(soccerTeams);

//- Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.


const soccerTeamNoPoints = soccerTeams.map(team => {
    const { name, fouls } = team;
    return { name, fouls };
});

console.log(soccerTeamNoPoints);

// *BONUS*
//Stampare in pagina oltre che in console!

const mainSite = document.querySelector("main")

soccerTeamNoPoints.forEach(team => {

    const markup =
        `<div>Nome squadra: ${team.name}</div>
        <div>Falli ricevuti: ${team.fouls}</div>
        <br>`;

    //console.log(team.name);
    //console.log(team.fouls);
    //console.log(markup);

    mainSite.innerHTML += markup;
});