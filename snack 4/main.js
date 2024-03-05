console.log('test');

//- Crea un array di oggetti che rappresentano delle persone.
const persone = [
    //- Ogni persona ha un nome, un cognome e un’età.
    { nome: 'Franco', cognome: 'Mazzuoli', eta: 45 },
    { nome: 'Ignazio', cognome: 'Cocco', eta: 17 },
    { nome: 'Basilio', cognome: 'Dettori', eta: 32 },
    { nome: 'Stefano', cognome: 'Lai', eta: 21 },
    { nome: 'Giovanni', cognome: 'Sirigu', eta: 19 },
    { nome: 'Giuseppe', cognome: 'Strazzera', eta: 12 },
    { nome: 'Dario', cognome: 'Caria', eta: 68 },
];

//- Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.
let eligibleToDrive = persone.filter(persone => persone.eta >= 18);
console.log(eligibleToDrive); //persone maggiorenni

let peopleDriving = eligibleToDrive.map(persone => `${persone.nome} ${persone.cognome} ha l'etá minima per guidare`);
console.log(peopleDriving); //Array con stringhe di chi puó guidare