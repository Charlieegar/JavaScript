

document.getElementById('login').addEventListener('submit', function(event) {
    event.preventDefault();

    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;

    localStorage.setItem('nombre', nombre);
    localStorage.setItem('apellido', apellido);

    let boton = document.querySelector(`button`)
    boton.addEventListener(`click`, () => {
        window.location.href = `./pages/juego.html`
    });
});
