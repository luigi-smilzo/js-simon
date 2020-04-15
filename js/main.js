/***************************************************************************************************************************
 * Un alert espone 5 numeri casuali (univoci).
 * Da li parte un timer di 30 secondi
 * Dopo 30 secondi l’ utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
 * Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
 * Assicuratevi di saper fare correttamente l’ esercizio con output base (alert() , prompt() , console.log() )
 **************************************************************************************************************************/

var rndNum = [];
var playerInputs = [];
var matching = [];
var time = 30;

for ( var i = 0; rndNum.length < 5; i++) {
    var item = Math.floor( Math.random() * 1000) + 1;
    if ( !rndNum.includes(item)) {
        rndNum.push(item)
    } else {
        i--;
    }
}

alert(rndNum);

var cntDwn = setInterval(function() {
    console.log(time);
    if (time == 0) {
        clearInterval(cntDwn);
    } else {
        time -= 1;
    }
}, 1000);

setTimeout(function () {
    for ( var i = 0; i < 5; i++) {
        var input = parseInt(prompt('Inserisci un numero'));
        playerInputs.push(input);
    }
    for ( var i = 0; i < rndNum.length; i++) {
        var toMatch = playerInputs[i];
        if ( rndNum.includes(toMatch) ) {
            matching.push(toMatch);
        }
    }
    console.log('Numeri da ricordare:', rndNum);
    console.log('Punteggio:', matching.length);
    console.log('Numeri indovinati:', matching);
}, 31000);



