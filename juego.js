


// let juego = {
//     palabras: [],
//     palabra: ``,
//     intentos: 6,
//     letras_adivinadas: [],
//     letras_incorrectas: [],
// };

// let contenedor_palabra = document.getElementById(`palabra`);
// let contenedor_letras = document.getElementById(`letras`);
// let contenedor_letras_incorrectas = document.getElementById(`letras_incorrectas`);
// let contenedor_intentos = document.getElementById(`intentos_restantes`);
// let contenedor_mensaje = document.getElementById(`mensaje`);
// let boton = document.getElementById(`reinicio`);

// async function pedir_palabra() {
//     try {
//         let respuesta = await fetch(`https://clientes.api.greenborn.com.ar/public-random-word`);
//         let data = await respuesta.json();
//         juego.palabras = data.map(palabra => quitarTildes(palabra));
//         inicio_juego();
//     } catch (error) {
//         console.log(error);
//     }
// }

// function inicio_juego() {
//     juego.palabra = juego.palabras[Math.floor(Math.random() * juego.palabras.length)];
//     juego.letras_adivinadas = [];
//     juego.letras_incorrectas = [];
//     juego.intentos = 6;
//     contenedor_intentos.textContent = `Intentos restantes: ${juego.intentos}`;
//     contenedor_mensaje.textContent = ``;
//     contenedor_letras_incorrectas.textContent = ``;
//     mostrar_palabra();
//     botones_letras();
//     boton.innerText = `Reiniciar Juego`;
// }

// // Aca se separa la palabra por letras, y se muestra con "_"
// function mostrar_palabra() {
//     contenedor_palabra.textContent = juego.palabra.split(``).map(letra => (juego.letras_adivinadas.includes(letra) ? letra : `_`)).join(` `);
// }

// function botones_letras() {
//     contenedor_letras.innerHTML = ``;
//     `abcdefghijklmnñopqrstuvwxyz`.split(``).forEach(letra => {
//         let cada_letra = document.createElement(`span`)
//         cada_letra.textContent = letra
//         cada_letra.classList.add(`letra`)
//         cada_letra.addEventListener(`click`, () => letra_adivinada(letra))
//         contenedor_letras.appendChild(cada_letra)

//     })
// }

// function letra_adivinada(letra) {
//     if (juego.letras_adivinadas.includes(letra) || juego.letras_incorrectas.includes(letra) || juego.intentos === 0) {
//         return;
//     }
//     juego.letras_adivinadas.push(letra);

//     if (juego.palabra.includes(letra)) {
//         mostrar_palabra();
//         comprobar_si_gana();
//     } else {
//         Toastify({

//             text: "La letra "+ letra.toUpperCase()+" no se encuentra en la palabra",

//             duration: 5000

//         }).showToast();

//         juego.letras_incorrectas.push(letra);
//         juego.intentos--;
//         contenedor_intentos.textContent = `Intentos restantes: ${juego.intentos}`;
//         contenedor_letras_incorrectas.textContent = `Letras incorrectas: ${juego.letras_incorrectas.join(', ')}`;
//         if (juego.intentos === 0) {
//             contenedor_mensaje.textContent = `Perdiste, la palabra era: ${juego.palabra}`;
//             juego_termina();
//         }
//     }
// }

// function comprobar_si_gana() {
//     if (juego.palabra.split(``).every(letra => juego.letras_adivinadas.includes(letra))) {
//         contenedor_mensaje.textContent = `Felicitaciones has ganado! Ahora el profe me aprueba`;
//         juego_termina();
//     }
// }

// function juego_termina() {
//     document.querySelectorAll(`.letra`).forEach(letra => letra.classList.add(`desactivado`));
// }

// boton.addEventListener(`click`, () => {
//     pedir_palabra();
// });

// function quitarTildes(palabra) {
//     return palabra.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
// }







let juego = {
    palabras: [],
    palabra: '',
    intentos: 6,
    letras_adivinadas: [],
    letras_incorrectas: [],
};

let contenedor_palabra = document.getElementById('palabra');
let contenedor_letras = document.getElementById('letras');
let contenedor_letras_incorrectas = document.getElementById('letras_incorrectas');
let contenedor_intentos = document.getElementById('intentos_restantes');
let contenedor_mensaje = document.getElementById('mensaje');
let boton = document.getElementById('reinicio');

async function pedir_palabra() {
    try {
        let respuesta = await fetch('https://clientes.api.greenborn.com.ar/public-random-word');
        let data = await respuesta.json();
        juego.palabras = data.map(palabra => quitarTildes(palabra));
        inicio_juego();
    } catch (error) {
        console.log(error);
    }
}

function inicio_juego() {
    juego.palabra = juego.palabras[Math.floor(Math.random() * juego.palabras.length)];
    juego.letras_adivinadas = [];
    juego.letras_incorrectas = [];
    juego.intentos = 6;
    contenedor_intentos.textContent = `Intentos restantes: ${juego.intentos}`;
    contenedor_mensaje.textContent = '';
    contenedor_letras_incorrectas.textContent = '';
    mostrar_palabra();
    botones_letras();
    boton.innerText = 'Reiniciar Juego';
}

// Aca se separa la palabra por letras, y se muestra con "_"
function mostrar_palabra() {
    contenedor_palabra.textContent = juego.palabra.split('').map(letra => (juego.letras_adivinadas.includes(letra) ? letra : '_')).join(' ');
}

function botones_letras() {
    contenedor_letras.innerHTML = '';
    'abcdefghijklmnñopqrstuvwxyz'.split('').forEach(letra => {
        let cada_letra = document.createElement('span');
        cada_letra.textContent = letra;
        cada_letra.classList.add('letra');
        cada_letra.addEventListener('click', () => letra_adivinada(letra));
        contenedor_letras.appendChild(cada_letra);
    });
}

function letra_adivinada(letra) {
    if (juego.letras_adivinadas.includes(letra) || juego.letras_incorrectas.includes(letra) || juego.intentos === 0) {
        return;
    }
    juego.letras_adivinadas.push(letra);

    if (juego.palabra.includes(letra)) {
        mostrar_palabra();
        comprobar_si_gana();
    } else {
        Toastify({
            text: "La letra " + letra.toUpperCase() + " no se encuentra en la palabra",
            duration: 5000
        }).showToast();

        juego.letras_incorrectas.push(letra);
        juego.intentos--;
        contenedor_intentos.textContent = `Intentos restantes: ${juego.intentos}`;
        contenedor_letras_incorrectas.textContent = `Letras incorrectas: ${juego.letras_incorrectas.join(', ')}`;
        if (juego.intentos === 0) {
            contenedor_mensaje.textContent = `Perdiste, la palabra era: ${juego.palabra}`;
            juego_termina();
        }
    }
}

function comprobar_si_gana() {
    if (juego.palabra.split('').every(letra => juego.letras_adivinadas.includes(letra))) {
        contenedor_mensaje.textContent = `Felicitaciones has ganado! Ahora el profe me aprueba`;
        juego_termina();
    }
}

function juego_termina() {
    document.querySelectorAll('.letra').forEach(letra => letra.classList.add('desactivado'));

    // Obtener nombre y apellido de localStorage
    let nombre = localStorage.getItem('nombre');
    let apellido = localStorage.getItem('apellido');
    
    // Guardar la posición
    agregar_posicion(nombre, apellido, juego.intentos);
}

// Función para agregar la posición a la tabla
function agregar_posicion(nombre, apellido, intentos) {
    let posiciones = JSON.parse(localStorage.getItem('posiciones')) || [];
    posiciones.push({ nombre, apellido, intentos });

    // Ordenar posiciones por intentos restantes (descendente)
    posiciones.sort((a, b) => b.intentos - a.intentos);

    localStorage.setItem('posiciones', JSON.stringify(posiciones));
    mostrar_tabla();
}

// Función para mostrar la tabla de posiciones
function mostrar_tabla() {
    let posiciones = JSON.parse(localStorage.getItem('posiciones')) || [];
    let tabla = document.getElementById('posiciones').getElementsByTagName('tbody')[0];
    tabla.innerHTML = '';

    posiciones.forEach(posicion => {
        let fila = tabla.insertRow();
        let fila_nombre = fila.insertCell(0);
        let fila_apellido = fila.insertCell(1);
        let fila_intentos = fila.insertCell(2);

        fila_nombre.textContent = posicion.nombre;
        fila_apellido.textContent = posicion.apellido;
        fila_intentos.textContent = posicion.intentos;
    });
}

boton.addEventListener('click', () => {
    pedir_palabra();
});


mostrar_tabla();

function quitarTildes(palabra) {
    return palabra.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
}
















