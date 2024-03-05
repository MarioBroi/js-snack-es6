console.log('test');

//- Crea un array di oggetti che rappresentano degli animali.
const animals = [
    //- Ogni animale ha un nome, una famiglia e una classe.
    { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
    { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
    { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
    { nome: 'capra', famiglia: 'bovidi', classe: 'mammiferi' },
    { nome: 'pappagallo', famiglia: 'psittacidae', classe: 'uccelli' },
    { nome: 'rana', famiglia: 'ranide', classe: 'anfibi' },
    { nome: 'orso', famiglia: 'ursidae', classe: 'mammiferi' },
    { nome: 'coccodrillo', famiglia: 'crocody;idae', classe: 'rettili' },
    { nome: 'puma', famiglia: 'felidi', classe: 'mammiferi' },
    { nome: 'acquila', famiglia: 'accipitridae', classe: 'uccelli' },
];

//- Crea un nuovo array con la lista dei mammiferi.

let mammiferi = animals.filter(animals => animals.classe == 'mammiferi')
console.log(mammiferi);