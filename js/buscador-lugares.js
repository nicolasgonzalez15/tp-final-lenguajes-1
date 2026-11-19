const buscadorGastronomia = document.getElementById("buscador-gastronomia");
const platosGastronomia = document.querySelectorAll("#lista-gastronomia li");

buscadorGastronomia.addEventListener("input", () => {
    const textoBuscado = buscadorGastronomia.value.toLowerCase();

    platosGastronomia.forEach((plato) => {
        const contenido = plato.textContent.toLowerCase();
        plato.style.display = contenido.includes(textoBuscado) ? "" : "none";
    });
});

const buscadorExcursiones = document.getElementById("buscador-excursiones");
const excursiones = document.querySelectorAll("#lista-excursiones li");

buscadorExcursiones.addEventListener("input", () => {
    const textoBuscado = buscadorExcursiones.value.toLowerCase();

    excursiones.forEach((excursion) => {
        const contenido = excursion.textContent.toLowerCase();
        excursion.style.display = contenido.includes(textoBuscado) ? "" : "none";
    });
});
