const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");
const successMessage = document.getElementById("successMessage");

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let valid = true;

  // Reset error messages
  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";
  successMessage.textContent = "";

  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name is required.";
    valid = false;
  }

  if (emailInput.value.trim() === "") {
    emailError.textContent = "Email is required.";
    valid = false;
  } else if (!isValidEmail(emailInput.value.trim())) {
    emailError.textContent = "Enter a valid email.";
    valid = false;
  }

  if (messageInput.value.trim() === "") {
    messageError.textContent = "Message is required.";
    valid = false;
  }

  if (valid) {
    successMessage.textContent = "Form submitted successfully!";
    form.reset();
    setTimeout(() => {
      successMessage.textContent = "";
    }, 10000); 
  }
  
});
