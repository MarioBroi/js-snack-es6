console.log('test');

//- Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)

const word = 'Ciao';
console.log(word);

wordReverser(word);

function wordReverser(params) {
    let reversedWord = word.split('').reverse().join('');
    console.log(reversedWord);

    return reversedWord;
}
