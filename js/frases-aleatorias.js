const coleccionFrases = [
  {
    posicion: 1,
    frase: "Hace más ruidos un solo hombre gritando que cien mil que están callados.",
    autor: "José de San Martín"
  },
  {
    posicion: 2,
    frase: "Sin educación, los pueblos caen en la barbarie y la tiranía.",
    autor: "Manuel Belgrano"
  },
  {
    posicion: 3,
    frase: "Si los pueblos no se ilustran, si no se vulgarizan sus derechos, si cada hombre no conoce lo que vale, nuevas ilusiones sucederán a las antiguas.",
    autor: "Mariano Moreno"
  },
  {
    posicion: 4,
    frase: "Hombre, pueblo, Nación, Estado, todo: todo está en los muchachos que se educan.",
    autor: "Domingo Faustino Sarmiento"
  },
  {
    posicion: 5,
    frase: "Para defender la causa de los pueblos no se necesitan grandes fuerzas, sino hombres de buena voluntad.",
    autor: "José Gervasio Artigas"
  }
];

const elementoFrase = document.getElementById("frase-texto");
const elementoAutor = document.getElementById("frase-autor");

function cambiarFraseAleatoria() {
  // Aplicamos la clase que baja la opacidad a 0 (desvanecimiento)
  elementoFrase.classList.add("fade-out");
  elementoAutor.classList.add("fade-out");

  // Esperamos a que termine la animación visual (500ms que dura el CSS) para cambiar el texto
  setTimeout(() => {
    const indiceAleatorio = Math.floor(Math.random() * coleccionFrases.length);
    const fraseSeleccionada = coleccionFrases[indiceAleatorio];

    elementoFrase.textContent = `"${fraseSeleccionada.frase}"`;
    elementoAutor.textContent = `- ${fraseSeleccionada.autor}`;

    elementoFrase.classList.remove("fade-out");
    elementoAutor.classList.remove("fade-out");
  }, 500);
}

// Ejecutar por primera vez al cargar la página (opcional, para no esperar 20s)
cambiarFraseAleatoria();

//Configurar el intervalo para que se ejecute cada 20 segundos (20000 ms)
setInterval(cambiarFraseAleatoria, 20000);