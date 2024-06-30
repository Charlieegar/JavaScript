
// Me olvidaba de usar un bojeto asique lo coloque asi jaja
let juego_del_ahorcado = {
    palabras: [`uruguay`, `coderhouse`, `basquetbol`, `futbol`, `celulares`, `computadora`, `america`],
    palabra: ``,
    intentos: 6,
    letras_adivinadas: [],
    letras_incorrectas: [],
    palabra_oculta: [],
};

let contenedor_palabra = document.getElementById(`palabra`);
let contenedor_letras = document.getElementById(`letras`);
let contenedor_intentos = document.getElementById(`intentos_restantes`);
let contenedor_mensaje = document.getElementById(`mensaje`);
let boton = document.getElementById(`reinicio`);

function inicio_juego() {
    juego_del_ahorcado.palabra = juego_del_ahorcado.palabras[Math.floor(Math.random() * juego_del_ahorcado.palabras.length)]
    juego_del_ahorcado.letras_adivinadas = [];
    juego_del_ahorcado.intentos = 6;
    contenedor_intentos.textContent = `Intentos restantes: ${juego_del_ahorcado.intentos}`
    contenedor_mensaje.textContent = ``;
    mostrar_palabra()
    botones_letras()
}

//Aca se separa la palabra por letras,y se muestra con "_"
function mostrar_palabra() {
    contenedor_palabra.textContent = juego_del_ahorcado.palabra.split(``).map(letra => (juego_del_ahorcado.letras_adivinadas.includes(letra) ? letra : `_`)).join(` `)
}

function botones_letras() {
    contenedor_letras.innerHTML = ``;
    `abcdefghijklmnñopqrstuvwxyz`.split(``).forEach(letra => {
        let cada_letra = document.createElement(`span`)
        cada_letra.textContent = letra
        cada_letra.classList.add(`letra`)
        cada_letra.addEventListener(`click`, () => letra_adivinada(letra))
        contenedor_letras.appendChild(cada_letra)

    })
}

function letra_adivinada(letra) {
    if (juego_del_ahorcado.letras_adivinadas.includes(letra) || juego_del_ahorcado.intentos === 0) {
        return;

    }
    juego_del_ahorcado.letras_adivinadas.push(letra)

    if (juego_del_ahorcado.palabra.includes(letra)) {
        mostrar_palabra();
        comprobar_si_gana();
    } else {
        juego_del_ahorcado.intentos--;
        contenedor_intentos.textContent = `Intentos restantes: ${juego_del_ahorcado.intentos}`
        if (juego_del_ahorcado.intentos === 0) {
            contenedor_mensaje.textContent = `Perdiste, la palabra era: ${juego_del_ahorcado.palabra}`
            juego_termina();
        }
    }
}

function comprobar_si_gana() {
    if (juego_del_ahorcado.palabra.split(``).every(letra => juego_del_ahorcado.letras_adivinadas.includes(letra))) {
        contenedor_mensaje.textContent = `Felicitaciones has ganado! Ahora el profe me aprueba`
        juego_termina();
    }
}

function juego_termina() {
    document.querySelectorAll(`.letra`).forEach(letra => letra.classList.add(`desactivado`));
}

boton.addEventListener(`click`, inicio_juego)

inicio_juego();

































