
function calcular(operacion, num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        alert('Por favor, ingrese valores numéricos válidos.');
        return;
    }

    let resultado;
    if (operacion === '+') {
        resultado = num1 + num2;
    } else if (operacion === '-') {
        resultado = num1 - num2;
    } else if (operacion === '*') {
        resultado = num1 * num2;
    } else if (operacion === '/') {
        if (num2 === 0) {
            alert('No se puede dividir por cero.');
            return;
        }
        resultado = num1 / num2;
    } 

    alert('El resultado es: ' + resultado);
}

function obtenerNumero(mensaje) {
    let valor;
    do {
        valor = parseFloat(prompt(mensaje));
    } while (isNaN(valor));
    return valor;
}

let repetir;
do {
    let operacion;
    do {
        operacion = prompt('Ingrese la operación a realizar (+, -, *, /)');
        if (operacion !== '+' && operacion !== '-' && operacion !== '*' && operacion !== '/') {
            alert('Operación no válida.');
        }
    } while (operacion !== '+' && operacion !== '-' && operacion !== '*' && operacion !== '/');

    let num1 = obtenerNumero('Ingrese el primer número');
    let num2 = obtenerNumero('Ingrese el segundo número');

    calcular(operacion, num1, num2);

    repetir = confirm('¿Quieres realizar otra operación?');
} while (repetir);


















































