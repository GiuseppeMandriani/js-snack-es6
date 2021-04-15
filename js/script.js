// Snack with ES5

// jsnack 1
// Creare un array di oggetti
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore



// Fase 1 Creazione Array di oggetti

var bici = [{
        nome: 'Pinarello',
        peso: 10,
    },
    {
        nome: 'Bianchi',
        peso: 8,
    },
    {
        nome: 'Scott',
        peso: 11,
    },
];

var biciLeggera = bici[0];
// console.log(biciLeggera);

for (var i = 1; i < bici.length; i++) {
    if (bici[i].peso < biciLeggera.peso) {
        biciLeggera = bici[i];
    }
}

console.log(biciLeggera.nome);


// JSNACK 2

/**
 *  A) Creare un array di oggetti di squadre di calcio,
 * 
 *  - ogni squadra avrà diverse proprietà: nome, punti fatti e falli subiti;
 * 
 *  - Nome sarà l'unica proprietà da compilare, le altre saranno tutte settate a 0;
 * 
 * 
 *  B) Generare numeri random al posto degli 0 nelle proprietà punti fatti e falli subiti;
 * 
 * 
 *  C) Creiamo un array i cui elementi contengono solo nomi  e falli subiti e stampiamo tutto in console
 * 
 * 
 */

// A Creazione array teams

var teams = [
    {
        nome: 'Milan',
        punti: 0,
        falliFatti: 0,
    },
    {
        nome: 'Roma',
        punti: 0,
        falliFatti: 0,
    },
    {
        nome: 'Inter',
        punti: 0,
        falliFatti: 0,
    },
    {
        nome: 'Napoli',
        punti: 0,
        falliFatti: 0,
    },
];

for (var i = 0; i < teams.length; i++) {
    var team = teams[i];

    team.punti = randomNumber(0,30);
    team.falliFatti = randomNumber(0,90);
}

console.table(teams);














// Prova interpolazione

const firstName = 'Giuseppe';

const lastName = 'Mandriani';

// const message = 'Name: ' + firstName + ' ' + lastName;

const message = `Nome: ${firstName} 
Cognome: ${lastName}`;


console.log(message);


/****************
 * FUNCTIONS
 ****************/

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}