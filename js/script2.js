console.log('Esercizi Rifatti Script 2');

console.log('*****Snack 1*******');
/****
 * Snack 1
 * Creare un array di oggetti: 
 * 
 * Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. 
 * Stampare a schermo la bici con peso minore utilizzando destructuring e template literal 
 * 
 */

// Fase 1 Creazione Array di Oggetti

// Creo prima gli oggetti

const biciUno = {
    nome: 'Atala',
    peso: 12,
};
const biciDue = {
    nome: 'Puma',
    peso: 22,
};
const biciTre = {
    nome: 'Bianchi',
    peso: 8,
};
const biciQuattro = {
    nome: 'Nike',
    peso: 15,
};

// Creo Array che contiene gli Oggetti

const bici = [
    biciUno,
    biciDue,
    biciTre,
    biciQuattro,
];



// Imposto la prima con indice 0 parametro di confronto

let biciPiuLeggera = bici[0];
// console.log('Primo elemento ', biciPiuLeggera);

// console.log(biciPiuLeggera.peso)

// Metodo 1 con forEach *****************************

// Itero nell'Array per confronto

// bici.forEach((element,index) =>{
//     // Confronto la proprietà 'peso' del parametro impostato con tutti gli altri oggetti
//     console.log('il peso della bici ' + (index + 1) + ': è ', element.peso + 'kg');
//       if((element.peso) < biciPiuLeggera.peso){
//           biciPiuLeggera = element;
//       };

// });

// Metodo 2 con filter*********************************

const newBici = bici.filter((element) =>{
    if((element.peso) < biciPiuLeggera.peso){
        biciPiuLeggera = element;
    }
    return element;
});

console.log(
    `Il risultato è la bici ${biciPiuLeggera.nome} che ha un peso di ${biciPiuLeggera.peso} kg`);


// Stampa a schermo del risultato 

const templateList = document.getElementById('list');

const template = document.getElementById('result');


templateList.innerHTML = `
<h3>Modelli</h3>
<h4>${biciUno.nome} <span class="weight-color">Peso:${biciUno.peso}kg</span></h4>
<h4>${biciDue.nome} <span class="weight-color">Peso:${biciDue.peso}kg</span></h4>
<h4>${biciTre.nome} <span class="weight-color">Peso:${biciTre.peso}kg</span></h4>
<h4>${biciQuattro.nome} <span class="weight-color">Peso:${biciQuattro.peso}kg</span></h4>`


template.innerHTML = `
<span class="bici">La bici con il peso inferiore è la: ${biciPiuLeggera.nome}</span>
<div>
    <span>Il suo peso è di ${biciPiuLeggera.peso}kg</span>
</div>`
;


    /**
 * 
 * // Snack 2
 * 
 * Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
 * IL Nome sarà l'unica proprietà da compilare, le altre saranno tutte settate a 0.
 * Generare numeri random al posto degli 0 nelle proprietà:
 * - Punti fatti e falli subiti
 * Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
 * 
 */


    console.log('**********Snack 2 **********');

// FASE 1 CREAZIONE Array

const team1 = {
    name: 'Milan',
    points: 0,
    fouls: 0,
}
const team2 = {
    name: 'Inter',
    points: 0,
    fouls: 0,
}
const team3 = {
    name: 'Roma',
    points: 0,
    fouls: 0,
}
const team4 = {
    name: 'Inter',
    points: 0,
    fouls: 0,
}

const teams = [
    team1,
    team2,
    team3,
    team4,
];

console.log('Before ',teams);

// Generazioni punti e falli

// Dichiaro prima la funzione e poi la invoco

const randomNumber = (min,max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};


// Metodo forEach non efficace perchè sovrascrive dati iniziali *************

// teams.forEach((element,index) =>{
//     // console.log(element.name)
//     // console.log(element.points)
//     // console.log(element.fouls)
//     element.points = randomNumber(0,30);
//     element.fouls = randomNumber(0,100);
// });

// console.log('after', teams);


// Metodo con MAP ***************

const newArrayMap = teams.map((element,index) =>{
    element.points = randomNumber(0,30);
    element.fouls = randomNumber(0,100);

     return element;

});

console.table(newArrayMap); // Classifica completa

// Metodo con map

const updateTeams = newArrayMap.map((element)=>{
    return{
        name: element.name,
        fouls: element.fouls,
    };
});


console.table(updateTeams); // Classifica con nome squadra e falli fatti






// Stampa a schermo

const squadre = document.getElementById('name');

const points = document.getElementById('points');

 squadre.innerHTML = `
 <h3>Squadre</h3>
 <span>${newArrayMap[0].name}</span>
 <span>${newArrayMap[1].name}</span>
 <span>${newArrayMap[2].name}</span>
 <span>${newArrayMap[3].name}</span>
 `

 points.innerHTML = `
 <h3>Punteggio</h3>
 <span>${newArrayMap[0].points}</span>
 <span>${newArrayMap[1].points}</span>
 <span>${newArrayMap[2].points}</span>
 <span>${newArrayMap[3].points}</span>
 `



// Snack with ES 6 PARTE 2

/**
 * Snack 3
 * 
 * Si scriva una funzione che accetti tre argomenti, un array e due numeri (a < b)
 * La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri
 * inseriti dall'utente (possibile usare forEach, for/ filter)
 * 
 * 
 */

console.log('***********Snack 3**********')


// Fase 1 Creazione Array 



const myArray = ['Paolo', 'Fabio', 'Lorenzo','Luca','Giuseppe','Aldo'];

console.log(myArray)

// Chiedo numeri all'utente min e max

let min = parseInt(prompt('Inserisci un numero tra 0 e 5'));

// Verifica inserimento numero

while(isNaN(min) || min < 0 || min > myArray.length){
    min = parseInt(prompt('Inserisci un numero tra 0 e 5'));
};

let max= parseInt(prompt('Inserisci un numero tra 0 e 5'));

// Verifica secondo numero
while(isNaN(max) || max < min || max > myArray.length){
    min = parseInt(prompt('Inserisci un numero tra 0 e 5'));
};

console.log('Primo numero inserito: ', min);

console.log('Secondo numero inserito: ', max)


// Metodo Filter ***************

// const arrayEs = myArray.filter((element,index) => {
//     return min <= index && max >= index;
// })

// console.log(arrayEs);


// Metodo forEach ***************

// Creo array dove inserire elementi

let neArr = [];

myArray.forEach((element,index) =>{
    if(min <= index && max >= index){
        neArr.push(element);
    };
});

console.log(neArr);


/**
 * jsnack 4
 * 
 * Dato un'array con dei capi d'abbigliamento - oggetti che contengono informazioni su nome modello, tipologia e colore 
 * 
 * - si aggiunga a ciascun elemento una ulteriore proprietà che indichi il costo del prodotto.
 * - Per inserire il costo del singolo prodotto si scriva una funzione che generi un numero random da 10 a 50 (potete sfruttare il map per aggiungere la nuova proprietà)
 */

// FASE 1  Creazione array 


console.log("*******Snack 4********")

const objects = [
    { 
        name: 'summer',
        type: 'tshirt',
        color: '#00aabb',
    },
    { 
        name: 'spring',
        type: 'sunglasses',
        color: '#00aaff',
    },
    { 
        name: 'Dev',
        type: 'shoes',
        color: '#bbccbb',
    },
    { 
        name: 'Dress',
        type: 'bag',
        color: '#ffaacc',
    },
];



const newObjectsPrice = objects.map((element) =>{
    const newElement = {
        ...element,
        price : randomNumber(10,50),
    };

    return newElement;
});

console.table(newObjectsPrice);














