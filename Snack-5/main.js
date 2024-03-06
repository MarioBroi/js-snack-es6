console.log('test');

//- Creare un array di oggetti:
//- Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.

const racingBicycles = [
    { name: "Trek Madone SLR 9", weight: 6.7 },
    { name: "Specialized S-Works Tarmac", weight: 6.4 },
    { name: "Cannondale SuperSix Evo", weight: 7.1 },
    { name: "Pinarello Dogma F12", weight: 6.9 },
    { name: "Bianchi Oltre XR4", weight: 7.2 },
];

//console.log(racingBicycles);

//- Stampare in console la bici con peso minore utilizzando destructuring e template literal

let lighterBicycleWeight = 100;
let lighterBicycleName;

const lighterBicycle = racingBicycles.filter(bicycle => {
    let { name, weight } = bicycle;
    if (weight < lighterBicycleWeight) {
        lighterBicycleWeight = weight;
        lighterBicycleName = name;
    }
});

console.log(`La bici meno pesante é: ${lighterBicycleName} con il peso di: ${lighterBicycleWeight}Kg`);