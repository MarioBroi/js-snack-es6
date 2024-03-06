console.log('test');

//- Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
let zucchine = [
    { varietà: "Nera di Milano", peso: 150, lunghezza: 20 },
    { varietà: "Romanesca", peso: 120, lunghezza: 18 },
    { varietà: "Tonda di Nizza", peso: 180, lunghezza: 22 },
    { varietà: "Lunga Fiorentina", peso: 200, lunghezza: 25 },
    { varietà: "Zucchino siciliano", peso: 130, lunghezza: 17 },
    { varietà: "Zucchino genovese", peso: 140, lunghezza: 16 },
    { varietà: "Trombetta di Albenga", peso: 170, lunghezza: 23 },
    { varietà: "Zucchino romanesco", peso: 160, lunghezza: 21 },
    { varietà: "Zucchina lunga fiorentina", peso: 190, lunghezza: 24 },
    { varietà: "Zucchino tondo di Piacenza", peso: 110, lunghezza: 15 },
];

console.log(zucchine);

//- Calcola quanto pesano tutte le zucchine.
let tot = 0;

for (let i = 0; i < zucchine.length; i++) {
    tot += zucchine[i].peso;
}

console.log(tot);