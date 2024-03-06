console.log('test');

//- Crea 10 oggetti che rappresentano una zucchina.
const zucchine = [
    { varietà: "Nera di Milano", peso: 150, lunghezza: 20 },
    { varietà: "Romanesca", peso: 120, lunghezza: 11 },
    { varietà: "Tonda di Nizza", peso: 180, lunghezza: 22 },
    { varietà: "Lunga Fiorentina", peso: 200, lunghezza: 25 },
    { varietà: "Zucchino siciliano", peso: 130, lunghezza: 17 },
    { varietà: "Zucchino genovese", peso: 140, lunghezza: 16 },
    { varietà: "Trombetta di Albenga", peso: 170, lunghezza: 7 },
    { varietà: "Zucchino romanesco", peso: 160, lunghezza: 21 },
    { varietà: "Zucchina lunga fiorentina", peso: 190, lunghezza: 14 },
    { varietà: "Zucchino tondo di Piacenza", peso: 110, lunghezza: 15 },
];

//- Dividi in due array separati le zucchine che misurano meno o più di 15cm.
let smallZucchina = zucchine.filter(zucchine => zucchine.lunghezza <= 14);
let bigZucchina = zucchine.filter(zucchine => zucchine.lunghezza >= 15);
console.log(smallZucchina, bigZucchina);

//- Infine stampa separatamente quanto pesano i due gruppi di zucchine.
let totSmall = 0;
let totBig = 0;
smallZucchina.forEach((zucchine) => {
    totSmall = totSmall + zucchine.peso
});
bigZucchina.forEach((zucchine) => {
    totBig = totBig + zucchine.peso
});
console.log("Il peso totale delle zucchine piccole é:", totSmall, "g");
console.log("Il peso totale delle zucchine grandi é:", totBig, "g");