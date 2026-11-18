const btnSubir = document.getElementById("btn-subir");

// 1. Mostrar u ocultar el botón según cuánto bajó el usuario
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    btnSubir.style.display = "block";
  } else {
    btnSubir.style.display = "none";
  }
});

// 2. Volver arriba suavemente al hacer clic
btnSubir.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});