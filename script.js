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
// function isPalindrome(word) {
//     //apro un ciclo che si ripeterà finchè l'indice dell'argomento word sarà minore della metà della lunghezza di word
//     for (let i = 0; i < word.length / 2; i++) {
//         // verifico che l'indice di word sia uguale all'indice di word meno la sua lunghezza meno uno ESEMPIO: 
//         // word ha i caratteri in posizione 0, 1, 2, 3 quindi la lunghezza è 4, con meno 1 ad ogni ciclo decremento 
//         // la verifica di una posizione in modo che lo esegua al contrario.. 
//         if (word[i] === word[word.length - 1 - i]) {
//             // quindi se líndice di word è uguale all'indice della lunghezza di word (ad ogni ciclo - una posizione) allora 
//             // ritorno un valore 
//             return 'La parola è un palindromo';
//         } // in questo caso non serve else perchè nel caso non siano uguali non entrerà nella condizione
//           // continuerà ad eseguire il resto del codice
//     }
//     // quindi ritorno il valore opposto a quello nella condizione
//     return 'La parola non è un palindromo';
// }

// // chiedo all'utente di inserire la sua parola
// const userWord = prompt('Scrivi qui la tua parola per sapere se è palindroma');
// // stampo in console invocando la funzione e inserendo la parola scritta dall'utente al posto dell'argomento word 
// console.log(isPalindrome(userWord));


//========================================
//============PARI O DISPARI==============
//========================================

// Pari e Dispari
//     L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
//     Generiamo un numero random (sempre da 1 a 5) per il computer attraverso una funzione.
//     Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari attraverso un'altra funzione
//     Dichiariamo chi ha vinto.

// chiedo all'utente di scegliere pari o dispari con il matodo .toLowerCase che mi restituisce sempre la stringa in minuscolo
const userChoice = prompt('Pari o Dispari?').toLowerCase();
// verifico
console.log('la tua scelta è:' + userChoice);
// chiedo all'utente un numero da 1 a 5 con un paseInt per ottere sempre un numero intero
const userNumber = parseInt(prompt('Inserisci un numero da 1 a 5'));
// verifico
console.log(userNumber);
// creo una variabile in cui invoco la funzione randomNumber che mi restituirà un numero randomico tra 1 e 5
const iaNumber = randomNumber(1, 5);
// verifico
console.log(iaNumber);
// creo una variabile in cui sommo il numero utente con quello dall'IA tramite la funzione oddOrEven
let somma = oddOrEven(userNumber + iaNumber);
// aggiungo le condizioni in cui dico che se il numero utente è uguale alla variabile somma allora ho vinto
if(userNumber === somma){
    console.log('Hai vinto');
} else{
    console.log('Hai perso');
}
console.log(somma);

//FUNCTIONS

// creo una funzione per ottenere un numero randomico tra un numero massimo e un numero minimo 
function randomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// creo una funzione in cui dico che se un numero è divisibile per 2 allora è pari 
function oddOrEven(number){

    if(number % 2 === 0){
        return 'Il numero è pari'
        
    } 
    // anche qui non ho bisgno dell'else come nell'esercizio precedente
    return 'Il numero è dispari'
}

