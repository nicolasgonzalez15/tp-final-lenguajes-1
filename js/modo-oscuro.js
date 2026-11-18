
const boton = document.getElementById("modo-oscuro"); 


boton.addEventListener("click", function() { 
    document.body.classList.toggle("oscuro"); 
    if (document.body.classList.contains("oscuro")) { 
        boton.textContent = "☀️ Modo claro"; 
    } else 
        { boton.textContent = "🌙 Modo oscuro"; } });