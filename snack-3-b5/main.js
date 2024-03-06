console.log('test');

//- Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)

const word = 'Ciao';
console.log(word);

wordReverser(word);

/**
 * This function gonna take a word string and give back the result of the reversed letters
 * @param {String} word 
 * @returns 
 */
function wordReverser(word) {
    let reversedWord = word.split('').reverse().join('');
    console.log(reversedWord);

    return reversedWord;
};