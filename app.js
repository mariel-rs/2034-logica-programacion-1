// Secret number vars
const maxLimit = parseInt(prompt("Escribe el límite del número secreto"));
const secretNumber = 1 + Math.floor(Math.random() * maxLimit); // random for usability
const maxAttempts = 3;
let inputNumber;
let counter = 1;
let found = false;

console.log(`secretNumber: ${secretNumber}`);

while (!found) {

    inputNumber = parseInt(prompt(`Escribe un número entre 1 y ${maxLimit} por favor:`));

    console.log(`inputNumber: ${inputNumber}`);
    console.log(`counter: ${counter}`);

    let attempts = counter == 1 ? "intento" : "intentos"; // Ternary

    // Comparacion
    if (inputNumber == secretNumber) {
        alert(`Acertaste el número: ${inputNumber} en ${counter} ${attempts}`);
        found = true;
    } else if (inputNumber > secretNumber) {
        alert("El número secreto es menor");
    } else {
        alert("El número secreto es mayor");
    }

    counter++;

    if (counter > maxAttempts && !found) {
        alert(`Llegaste al número máximo de ${maxAttempts} intentos`);
        break;
    }

}