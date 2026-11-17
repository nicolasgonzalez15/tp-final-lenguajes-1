const contactoForm = document.getElementById('contactoForm');
const firstNameInput = document.getElementById('firstName');
const firstNameMessage = document.getElementById('firstNameMessage');
const lastNameInput = document.getElementById('lastName');
const lastNameMessage = document.getElementById('lastNameMessage');
const emailInput = document.getElementById('email');
const emailMessage = document.getElementById('emailMessage');
const textAreaInput = document.getElementById('textArea');
const textAreaMessage = document.getElementById('textAreaMessage');
const formModal = document.getElementById('formModal');


const validateEmail = (value) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
};

contactoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let isValid = true;

  firstNameMessage.textContent = "";
  lastNameMessage.textContent = "";
  emailMessage.textContent = "";
  textAreaMessage.textContent = "";

  if (firstNameInput.value.length < 3) {
    firstNameMessage.textContent = 'Ingresa un Nombre válido';
    isValid = false;
  }

  if (lastNameInput.value.trim().length < 3) {
    lastNameMessage.textContent = 'Ingresa un Apellido válido';
    isValid = false;
  }

  if (!validateEmail(emailInput.value)) {
    emailMessage.textContent = "Ingresa un Email válido";
    isValid = false;
  }

  if (textAreaInput.value.trim().length < 5) {
    textAreaMessage.textContent = 'Ingresa una Consulta válida';
    isValid = false;
  }

  if (isValid) {
    firstNameInput.value = "";
    lastNameInput.value = "";
    emailInput.value = "";
    textAreaInput.value = "";

    const modalInstance = new bootstrap.Modal(formModal);
    modalInstance.show();
  }
});