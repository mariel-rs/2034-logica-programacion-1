// 1
let diaSemana = prompt("Que dia de la semana es?");

if (diaSemana === "Sabado" || diaSemana === "Domingo") {
    alert("Buen fin de semana");
}

// 2
let numberInput = prompt("Escribe un número");

if (numberInput > 0) {
    alert("El número es positivo");
} else if (numberInput < 0) {
    alert("El número es negativo");
} else {
    alert("El número es cero");
}

// 3
let puntuacion = 200;

if (puntuacion >= 100) {
    alert("Felicidades, has ganado");
} else {
    alert("Intenta nuevamente para ganar");
}

// 4
let saldoCuenta = 100;
alert(`Saldo cuenta: ${saldoCuenta}`);

// 5
let nameInput = prompt("Escribe tu nombre");
alert(`Hola ${nameInput}`);