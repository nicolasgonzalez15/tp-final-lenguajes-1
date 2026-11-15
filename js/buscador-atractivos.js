const buscador = document.getElementById("buscador");

const atractivos = document.querySelectorAll(".tarjeta-atractivo");

buscador.addEventListener("input",()=>{
    const texto = buscador.value.toLowerCase();
    atractivos.forEach(atractivo =>{
        const contenido = atractivo.textContent.toLowerCase();
        atractivo.style.display = contenido.includes(texto)? "":"none";
    })
})