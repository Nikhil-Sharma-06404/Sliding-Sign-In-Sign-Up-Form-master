const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const signInForm = document.querySelector(".sign-in-form");
const signUpForm = document.querySelector(".sign-up-form");

const createErrorMessage = (message) => {
  const errorMessage = document.createElement('div');
  errorMessage.className = 'error-message';
  errorMessage.innerText = message;
  document.body.appendChild(errorMessage);

  setTimeout(() => {
    errorMessage.classList.add('show');
  }, 10);

  setTimeout(() => {
    errorMessage.classList.remove('show');
    document.body.removeChild(errorMessage);
  }, 3000);
};

const validateForm = (form) => {
  const inputs = form.querySelectorAll('input');
  for (let input of inputs) {
    if (!input.value) {
      return false;
    }
  }
  return true;
};

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

signInForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!validateForm(signInForm)) {
    createErrorMessage('Please fill in all fields.');
  } else {
    signInForm.submit();
  }
});

signUpForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!validateForm(signUpForm)) {
    createErrorMessage('Please fill in all fields.');
  } else {
    signUpForm.submit();
  }
});
