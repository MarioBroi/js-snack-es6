console.log('test');

//- A partire da un array di stringhe,
const nomi = [
    'Alcide',
    'ernesto',
    'Osvaldo',
    'MIMMO',
    'bacchisio',
    'Ermenegildo'
];

// crea un secondo array formattando le stringhe del primo array in minuscolo

const nomiMinuscolo = nomi.map(minuscolo => minuscolo.toLowerCase());
console.log(nomiMinuscolo);

// e con l’iniziale maiuscola.

const nomiMaiuscolo = nomiMinuscolo.map(nomiMinuscolo => nomiMinuscolo.charAt(0).toUpperCase() + nomiMinuscolo.slice(1));
console.log(nomiMaiuscolo);