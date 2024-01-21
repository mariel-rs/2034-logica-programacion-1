/* 1: Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 
'while'. Muestra cada número.
*/

let counterUp = 1; // Initialize in 1
while (counterUp <= 10) {
    console.log(`Number ${counterUp}`);
    counterUp++;
}

/* 2: Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 
'while'. Muestra cada número.
*/
let counterDown = 10; // Initialize in 10
while (counterDown >= 0) {
    console.log(`Number ${counterDown}`);
    counterDown++;
}

/* 3 y 4: Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 
hasta ese número utilizando un bucle 'while' en la consola del navegador.
*/
let progCounterUp = 0;
let userInputUp = prompt("Ingrese un número para empezar la cuenta progresiva");

while (progCounterUp <= userInputUp) {
    console.log(`Contando: ${progCounterUp}`);
    progCounterUp++;
}