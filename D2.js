/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num1 = 2;
let num2 = 6;
if (num1 > num2) {
  console.log(num1 + " è maggiore di num 2" + num2);
} else {
  console.log(num2 + " è maggiore di " + num1);
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const numero = 5;
const numFornito = parseInt(prompt("Inserire un numero"));
if (numFornito > numero || numFornito < numero) {
  console.log("not equal");
} else {
  console.log("is equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
if (numFornito % 5 === 0) {
  console.log("divisibile per 5");
} else {
  console.log("non è divisibile per 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const numFornito2 = parseInt(prompt("inserire un secondo numero"));
const numb = 8;
const add = numFornito + numFornito2;
const sot = numFornito - numFornito2;
console.log(numFornito, numFornito2, add, sot);
if (numFornito === numb || numFornito2 === numb) {
  console.log("uno dei due numeri è uguale a 8");
} else if (add === numb || sot === numb) {
  console.log("o la loro sottrazione o addizione è uguale a 8");
} else {
  console.log(
    "nessun numero è uguale a 8 e neanche la loro sottrazione e addizione"
  );
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const promo = 50;
const sped = 10;
let totalShoppingCart = parseInt(prompt("inserire totale spesa"));
if (totalShoppingCart >= promo) {
  console.log("la spedizione è gratis");
} else {
  totalShoppingCart = totalShoppingCart + 10;
  console.log("la spesa totale con spedizione è", totalShoppingCart);
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const bF = 20 / 100;
totalShoppingCart = totalShoppingCart - totalShoppingCart * bF;
if (totalShoppingCart >= promo) {
  console.log("la spedizione è gratis");
} else {
  totalShoppingCart = totalShoppingCart + 10;
  console.log("la spesa totale con spedizione è", totalShoppingCart);
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numero1 = 4;
let numero2 = 3;
let numero3 = 7;
if (numero1 <= numero2 && vä12 <= numero3) {
  console.log(numero1, numero2, numero3);
} else if (numero2 >= numero3 && numeroi <= numero3) {
  console.log(numero1, numero3, numero2);
} else if (numero1 <= numero3 && numero2 <= numero1) {
  console.log(numero2, numero1, numero3);
} else if (numero3 >= numero2 && numeroi >= numero3) {
  console.log(numero2, numero3, numero1);
} else if (numero3 <= numero2 && numero2 <= numero1) {
  console.log(numero3, numero2, numero1);
} else {
  console.log(numero3, numero1, numero2);
}
/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const valFornito = 12;
if (typeof valFornito === "number") {
  console.log(" il valore è un numero");
} else {
  console.log(" il valore non è un numero");
}
/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
if (numFornito % 2 === 0) {
  console.log(" il numero è pari ");
} else {
  console.log(" il numero fornito è dispari ");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let val = 6;
if (val < 5) {
  console.log("Meno di 5");
} else if (val < 10) {
  console.log("Meno di 10");
} else {
  console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

/* SCRIVI QUI LA TUA RISPOSTA */
me.city = "Toronto";
console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName;
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
me.skills.pop();
console.log(me.skills);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const array = [];
console.log(array);
array.push(1);
array.push(2);
array.push(3);
array.push(4);
array.push(5);
array.push(6);
array.push(7);
array.push(8);
array.push(9);
array.push(10);
console.log(array);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
array.pop();
array.push(100);
console.log(array);
