// // oude stijl while loop & for loop !

var colors = ['yellow', 'bue', 'red', 'orange'];

let i = 0;
while (i < colors.length) {
    console.log(colors[i]);
    i++;
}

for (i = 0; i <colors.length; i++) {
    console.log(colors[i]);
}

// nieuwe stijl met forEach !

var colorsArray = ['yellow', 'bue', 'red', 'orange'];

colorsArray.forEach (color => console.log(color));

/* Antwoorden vragenlijst: 
1. While loop neemt 3 regels in beslag en for loop neemt 2 regels in beslag. 
2. een forEach method neemt maar 1 regel in beslag. 
3.  - Je raak niet meer verstrikt in een eindelose loop. 
    - ik vind het overzichterlijker lezen omdat de i's weg zijn. 
4. antwoord stond al in de tekst maar het is dus nee. 