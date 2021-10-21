const isValidEmail = (email) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const isValidPhone = (phone) => {
  const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  return re.test(String(phone).toLowerCase());
};

const form = document.querySelector("form");
const thankYou = document.querySelector(".thank-you");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const messageInput = document.getElementById("message");

let isFormValid = false;

const inputs = [nameInput, emailInput, phoneInput, messageInput];

const resetElement = (element) => {
  element.classList.remove("invalid");
  element.nextElementSibling.classList.add("hidden");
};

const invalidElement = (element) => {
  element.classList.add("invalid");
  element.nextElementSibling.classList.remove("hidden");
};

const validateInputs = () => {
  isFormValid = true;
  resetElement(nameInput);
  resetElement(emailInput);
  resetElement(messageInput);

  if (!nameInput.value) {
    isFormValid = false;
    invalidElement(nameInput);
  }

  if (!messageInput.value) {
    isFormValid = false;
    invalidElement(messageInput);
  }

  if (!isValidEmail(emailInput.value)) {
    isFormValid = false;
    invalidElement(emailInput);
  }

  // if (!isValidPhone(phoneInput.value)) {
  //   isFormValid = false;
  //   invalidElement(messageInput);
  // }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
  if (isFormValid) {
    form.remove();
    thankYou.classList.remove("hidden")
  }
});

nameInput.addEventListener("input", () => {
  validateInputs();
});

emailInput.addEventListener("input", () => {
  validateInputs();
});

messageInput.addEventListener("input", () => {
  validateInputs();
});