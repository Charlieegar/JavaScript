
// Me olvidaba de usar un bojeto asique lo coloque asi jaja
const juego_del_ahorcado = {
    palabras: ["uruguay", "coderhouse", "basquetbol", "futbol", "celulares"],
    palabra: "",
    intentos: 6,
    letras_adivinadas: [],
    letras_incorrectas: [],
    palabra_oculta: [],

    // Aca selecciono una palabra aleatoria
    seleccionar_palabra() {
        this.palabra = this.palabras[Math.floor(Math.random() * this.palabras.length)];
        // aca secrea un array con la longitud de la palabre aleatoria colocando '_' para mostrar los espacios vacios y longitud de la palabra al usuario
        this.palabra_oculta = Array(this.palabra.length).fill("_");
    },

    // Se muestra el estado actual del jueglo (aciertos, letras incorrectas, intentos restantes, etc)
    mostrar_estado() {
        alert(`Palabra: ${this.palabra_oculta.join(" ")}\nLetras incorrectas: ${this.letras_incorrectas.join(", ")}\nIntentos restantes: ${this.intentos}`);
    },

    // Forma para adivinar una letra
    adivinar(letra) {
        if (this.letras_adivinadas.includes(letra) || this.letras_incorrectas.includes(letra)) {
            alert(`Ya intentaste con la letra ${letra}. Prueba con otra distinta.`);
            return;
        }

        if (this.palabra.includes(letra)) {
            for (let i = 0; i < this.palabra.length; i++) {
                if (this.palabra[i] === letra) {
                    this.palabra_oculta[i] = letra;
                }
            }
            this.letras_adivinadas.push(letra);
        } else {
            this.letras_incorrectas.push(letra);
            this.intentos--;
        }

        this.mostrar_estado();

        // Vemos si el jugador gana o pierde
        if (this.palabra_oculta.join("") === this.palabra) {
            alert("¡Felicidades! Has ganado.");
        } else if (this.intentos === 0) {
            alert(`Perdiste. La palabra era "${this.palabra}".`);
        }
    }
};

// comienza el juego
juego_del_ahorcado.seleccionar_palabra();
juego_del_ahorcado.mostrar_estado();

// Forma de jugar
while (juego_del_ahorcado.intentos > 0 && juego_del_ahorcado.palabra_oculta.join("") !== juego_del_ahorcado.palabra) {
    juego_del_ahorcado.adivinar(prompt("Adivina una letra:"));
}









































