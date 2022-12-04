/*
Palidroma
    Chiedere all’utente di inserire una parola:
    Creare una funzione per capire se la parola inserita è palindroma
Pari e Dispari
    L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
    Generiamo un numero random (sempre da 1 a 5) per il computer attraverso una funzione.
    Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari attraverso un'altra funzione
    Dichiariamo chi ha vinto.

*/
//========================================
//===============PALINDROMA===============
//========================================

//creo una funzione con l'argomento word che sarà usata solo all'interno della funzione stessa essendo la funzione indipendente dal resto del codice
function isPalindrome(word) {
    //apro un ciclo che si ripeterà finchè l'indice dell'argomento word sarà minore della metà della lunghezza di word
    for (let i = 0; i < word.length / 2; i++) {
        // verifico che l'indice di word sia uguale all'indice di word meno la sua lunghezza meno uno ESEMPIO: 
        // word ha i caratteri in posizione 0, 1, 2, 3 quindi la lunghezza è 4, con meno 1 ad ogni ciclo decremento 
        // la verifica di una posizione in modo che lo esegua al contrario.. 
        if (word[i] === word[word.length - 1 - i]) {
            // quindi se líndice di word è uguale all'indice della lunghezza di word (ad ogni ciclo - una posizione) allora 
            // ritorno un valore 
            return 'La parola è un palindromo';
        } // in questo caso non serve else perchè nel caso non siano uguali non entrerà nella condizione
          // continuerà ad eseguire il resto del codice
    }
    // quindi ritorno il valore opposto a quello nella condizione
    return 'La parola non è un palindromo';
}

// chiedo all'utente di inserire la sua parola
const userWord = prompt('Scrivi qui la tua parola per sapere se è palindroma');
// stampo in console invocando la funzione e inserendo la parola scritta dall'utente al posto dell'argomento word 
console.log(isPalindrome(userWord));
