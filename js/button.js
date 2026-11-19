const btnSubir = document.getElementById("btn-subir");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    btnSubir.style.display = "block";
  } else {
    btnSubir.style.display = "none";
  }
});

btnSubir.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});