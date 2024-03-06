console.log('test');

//- Crea un array composto da 10 automobili.
//- Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
let automobili = [
    {
        marca: "Koenigsegg",
        modello: "Jesko",
        alimentazione: "Ibrida",
    }, //1
    {
        marca: "Rimac",
        modello: "Nevera",
        alimentazione: "Elettrica",
    },//2
    {
        marca: "Ferrari",
        modello: "SF90",
        alimentazione: "Ibrida",
    },//3
    {
        marca: "Lamborghini",
        modello: "Aventador",
        alimentazione: "Benzina",
    },//4
    {
        marca: "Dacia",
        modello: "Duster",
        alimentazione: "Diesel",
    },//5
    {
        marca: "Pagani",
        modello: "Huayra",
        alimentazione: "Benzina",
    },//6
    {
        marca: "Toyota",
        modello: "Supra",
        alimentazione: "Benzina",
    },//7
    {
        marca: "Mitsubishi",
        modello: "L200",
        alimentazione: "Diesel",
    },//8
    {
        marca: "Mazda",
        modello: "RX7 FDBN",
        alimentazione: "Benzina",
    },//9
    {
        marca: "Suzuki",
        modello: "Eskudo",
        alimentazione: "Benzina",
    },//10
];

//- Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.

let benzina = automobili.filter(checkFuel => checkFuel.alimentazione == "Benzina");

let diesel = automobili.filter(checkFuel => checkFuel.alimentazione == "Diesel");

let different = automobili.filter(checkFuel => checkFuel.alimentazione !== "Benzina" && checkFuel.alimentazione !== "Diesel");

//- Infine stampa separatamente i 3 array.
console.log(benzina);
console.log(diesel);
console.log(different);