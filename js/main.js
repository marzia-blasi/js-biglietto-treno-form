/* Scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.


MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.


MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo. Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.


MILESTONE 3:
Ora che la logica è funzionante in pagina, possiamo andare a dedicarci allo stile, raffinando la parte di HTML e CSS in modo da renderla esteticamente gradevole.
Nota:
Se non vi sentite particolarmente creativi, questa potrebbe essere un’implementazione da seguire per il secondo milestone.
Potete scegliere di implementare una soluzione completamente diversa oppure simile, ma in ogni caso cercate di farla vostra.

id
name 
age 
bottone 

*/

const user = document.getElementById("name");
const age = document.getElementById("age");
const kmTrip = document.getElementById("km");
const button = document.getElementById("bottone");

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  //console.log(e);
  const firstName = user.value;
  const ageValue = age.value;
  const userkm = kmTrip.value;
  // console.log(firstName, ageValue);

  // logica per calcolo biglietto

  // parseFloat() converte la stringa in numero intero
  const km = parseFloat(userkm);
  const useragespecial = parseFloat(ageValue);

  if (km > 0) {
    const price = km * 0.21;
    if (useragespecial < 18) {
      const pricediscont20 = (price * 20) / 100;
      const priceunder18 = price - pricediscont20;
      console.log(
        `Il costo del viaggio per ${km} km è €${priceunder18.toFixed(2)}`
      );
    } else if (useragespecial >= 65) {
      const pricediscount65 = (price * 40) / 100;
      const priceafter65 = price - pricediscount65;
      console.log(
        `Il costo del viaggio per ${km} km è €${priceafter65.toFixed(2)}`
      );
    } else {
      console.log(`Il costo del viaggio per ${km} km è €${price.toFixed(2)}`);
    }
  }
});

/* Cose da fare logica: 
- appena è pronto il biglietto
- stampare in pagina i dati che abbiamo ottenuto
- generare un numero random per il posto 
*/
