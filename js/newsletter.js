const email = document.getElementById("email");
const mensaje = document.getElementById("mensaje");
const btn = document.getElementById("btn-suscribir");
const formNewsletter = document.getElementById("form-newsletter");

formNewsletter.addEventListener("submit", (event) => {
  event.preventDefault();  
  const valorEmail = email.value.trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular simple para email

    const validarEmail = (email) => {
        return emailRegex.test(email); 
    }

  mensaje.classList.remove("text-success", "text-danger");

  if (validarEmail(valorEmail)){
    mensaje.textContent = "¡Gracias por suscribirte!";
    mensaje.classList.add("text-success");
    email.value ="";
    email.style.borderColor = "";

  }else{

        if(valorEmail.length == 0){
                mensaje.textContent = "Por favor, ingresá tu email.";
                mensaje.classList.add("text-danger");
            } else{
            mensaje.textContent = "Revisá el formato del email ingresado.";
            mensaje.classList.add("text-danger");s
        }
        // Coloco borde de error
        email.style.borderColor = 'red';
      }
});
