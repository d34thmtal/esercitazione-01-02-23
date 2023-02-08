/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA 

let n1=130
let n2=270

if (n1>n2) {
  console.log("il numero maggiore è " +n1)
} else console.log("il numero maggiore è " +n2)
*/

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA
let numero = 10
if (numero !== 5) {
  console.log("not equal")
} else console.log("equal")
 */

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisible by 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA
 let n =15

if(n % 5 === 0) {
  console.log("divisibile per 5")

} else console.log("non divisibile per 5")
*/

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA
let n1 = 3
let n2 = 5

if (n1 === 8 || n2 ===8) {
  console.log ("almeno uno dei due numeri è uguale a 8")
} else if (n1 + n2 === 8){
  console.log ("la loro somma è uguale a 8")
} else if (n1 - n2 === 8 || n2 - n1 === 8){
  console.log ("la loro sottrazione è unaguale a 8")
}
*/


/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA 
let carrello = 60

if (carrello >50) {
  console.log("Totale: " + carrello)
} else console.log("Totale: " + (carrello + 10))
*/



/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA 

let carrello = 100

if(carrello >50) {
  console.log(carrello *0.8)
} else console.log(carrello *0.8 + 10)*/



/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA}

let x =10
let y =35
let z =70

if(x > y && x > z){
  if(y > z) {
    console.log(x +", " +y+ ", "+z)
  } else {
    console.log(x +", "+z+ ", "+y)
  }
} else if (y > x && y > z) {
  if (x > z) {
    console.log(y +", " +x+ ", "+z)
  } else {
    console.log (y +", " +z+ ", "+x)
  }
}else if (z > x && z> y) 
  if (x > y) {
    console.log (z +", " +x+ ", "+y)
  } else {
    console.log (z +", " +y+ ", "+x)
  }
*/



/* ESERCIZIO 8
  Crea un algoritmo per verificare che un numero fornito sia un intero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/


/* SCRIVI QUI LA TUA RISPOSTA 
let n = 15.5

if (n% 1 === 0) {
  console.log("è intero")
}else console.log("non è intero")*/


/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA
let n = 18

if (n% 2 === 0) {
  console.log("è pari")
}else console.log("è dispari") 
*/

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

/* SCRIVI QUI LA TUA RISPOSTA
let val = 7
if (val < 5) {
    console.log("Meno di 5");
  } else if (val < 10) {
    console.log("Meno di 10");
  } else {
    console.log("Uguale a 10 o maggiore");
  }
 */

/*
ESERCIZIO 11
  Crea un blocco condizionale if/else annidato su più livelli per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

/* SCRIVI QUI LA TUA RISPOSTA
let n = 23
if (n < 5) {
    console.log("Tiny");
  } else if (n < 10) {
    console.log("Small");
  } else if (n <15) {
    console.log("Medium");
  } else if (n <20) {
    console.log("Large");
  } else if (n >= 20) {
    console.log("Huge");
  }
*/


/*  ESERCIZIO 12
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile chiamata isMale.
*/

/* SCRIVI QUI LA TUA RISPOSTA

isMale = false
let gender = isMale ? "male" : "female"
console.log(gender) */

/* ESERCIZIO 13
  Mostra i numeri da 0 a 5 (incluso) in ordine ascendente utilizzando un ciclo while.
*/

/* SCRIVI QUI LA TUA RISPOSTA
let i = 0

while (i <=5) {
  console.log(i)
  i++
}
*/

/* ESERCIZIO 14
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente utilizzando un ciclo for.
*/

/* SCRIVI QUI LA TUA RISPOSTA 
for(let i = 0; i <=10; i++) {
  console.log(i)
}
*/


/* ESERCIZIO 15
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA 

for(let i = 0; i <=10; i++) {
  if (i !== 3 && i !== 8) {
    console.log(i)
  }
}
*/


/* ESERCIZIO 16
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA 
for (let i = 0; i <= 15; i++) {
  if ( i % 2 === 0) {
  console.log(i, " è pari")
  }else {
      console.log(i, " è dispari")
    }
  }
*/



/* ESERCIZIO 17
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3, stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/

/* SCRIVI QUI LA TUA RISPOSTA 
for (let i = 0; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz")
  } else if (i % 3 === 0) {
    console.log("Fizz")
  } else if (i % 5 === 0){
    console.log("Buzz")
  } else console.log(i)

}
*/


/* ESERCIZIO 18
  Scrivi un algoritmo per controllare il giorno della settimana. Usa uno switch-case sulla variabile "day", che può avere un valore da 1 a 7.
  Ad esempio, se il valore di "day" è 1, stampa in console "Lunedì"; se il valore fosse 3, in console dovrebbe comparire "Mercoledì".
*/

/* SCRIVI QUI LA TUA RISPOSTA 

let day = 3
switch (day) {
  case 1:
    day = console.log ("lunedi")
    break
    case 2:
      day = console.log ("martedi")
      break
    case 3:
      day = console.log ("mercoledi")
      break
    case 4:
      day = console.log ("giovedi")
      break
    case 5:
      day = console.log ("venerdi")
      break
    case 6:
      day = console.log ("sabato")
      break
    case 7:
      day = console.log ("domenica")
      break

  default:
  console.log("Il valore non è corretto")
}
*/