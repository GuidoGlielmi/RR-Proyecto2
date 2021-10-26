const formInputs = Array.from(document.getElementsByClassName("input"));
window.onload = () => {
  for (let key of formInputs) {
    if (localStorage[key.name]) key.value = localStorage[key.name];
  }
  formWelcomeSign.innerHTML = "HOLA " + formName.value;
};

const formName = document.getElementById("name"); //ctrl+d selects the framed word
const formEmail = document.getElementById("email");
const formPassword = document.getElementById("password");
const formAge = document.getElementById("age");
const formTelephone = document.getElementById("telephone");
const formAddress = document.getElementById("address");
const formCity = document.getElementById("city");
const formZipCode = document.getElementById("zip-code");
const formDni = document.getElementById("dni");

const nameError = document.querySelector(".name-error");
const emailError = document.querySelector(".email-error");
const passwordError = document.querySelector(".password-error");
const ageError = document.querySelector(".age-error");
const telephoneError = document.querySelector(".tel-error");
const addressError = document.querySelector(".address-error");
const cityError = document.querySelector(".city-error");
const zipCodeError = document.querySelector(".zip-code-error");
const dniError = document.querySelector(".dni-error");

const formWelcomeSign = document.getElementById("welcome-sign");
const modalSign = document.getElementById("modal");
const modalText = document.getElementById("modal-text");
const modalClose = document.getElementById("close-button");
const submitButton = document.getElementById("submit");
const burgerLinks = document.getElementById("nav-links");
const burger = document.getElementById("burger");
burger.content = burgerLinks;
burger.addEventListener("click", toggleShow);

function toggleShow(tag) {
  //it is necessary to add the content of the toggle
  if (tag.currentTarget.content.style.display === "") {
    tag.currentTarget.content.style.display = "flex";
  } else {
    tag.currentTarget.content.style.display = "";
  }
}

const nameValidator = () => {
  if (
    formName.value.length < 6 ||
    specialCharValidator(formName.value, 1, " ")
  ) {
    let errorText = "Ingrese Nombre y Apellido";
    modalText.innerText = errorText;
    modalSign.className = "modal";
    return (nameError.innerHTML = errorText);
  }
};
const emailValidator = () => {
  if (specialCharValidator(formEmail.value, 1, "@", ".")) {
    let errorText = "Ingrese un formato de email válido";
    modalText.innerText = errorText;
    modalSign.className = "modal";
    return (emailError.innerHTML = errorText);
  }
};
const passwordValidator = () => {
  if (formPassword.value < 8 || numAndCharValidator(formPassword.value)) {
    let errorText =
      "La contraseña debe contener números y letras con mas de ocho caracteres ";
    modalText.innerText = errorText;
    modalSign.className = "modal";
    return (passwordError.innerHTML = errorText);
  }
};
const ageValidator = () => {
  if (formAge.value !== Math.round(formAge.value) && formAge.value < 18) {
    // Math.round works with strings
    let errorText = "Ingrese un número entero mayor a 18";
    modalText.innerText = errorText;
    modalSign.className = "modal";
    return (ageError.innerHTML = errorText);
  }
};
const telephoneValidator = () => {
  if (formTelephone.value.length < 7 || isNaN(formTelephone.value)) {
    let errorText =
      "Ingrese 8 o más números sin espacios, paréntesis o guiones";
    modalText.innerText = errorText;
    modalSign.className = "modal";
    return (telephoneError.innerHTML = errorText);
  }
};
const addressValidator = () => {
  if (
    formAddress.value.length < 5 ||
    specialCharValidator(formAddress.value, 1, " ") ||
    numAndCharValidator(formAddress.value)
  ) {
    let errorText = "Ingrese una dirección y un número";
    modalText.innerText = errorText;
    modalSign.className = "modal";
    return (addressError.innerHTML = errorText);
  }
};
const cityValidator = () => {
  if (formCity.value.length < 3) {
    let errorText = "Ingrese una ciudad válida";
    modalText.innerText = errorText;
    modalSign.className = "modal";
    return (cityError.innerHTML = errorText);
  }
};
const zipCodeValidator = () => {
  if (formZipCode.value.length < 3) {
    let errorText = "Ingrese un código postal válido";
    modalText.innerText = errorText;
    modalSign.className = "modal";
    return (zipCodeError.innerHTML = errorText);
  }
};
const dniValidator = () => {
  if (
    (formDni.value.length !== 7 && formDni.value.length !== 8) ||
    isNaN(formDni.value)
  ) {
    let errorText = "Ingrese un DNI válido";
    modalText.innerText = errorText;
    modalSign.className = "modal";
    return (dniError.innerHTML = errorText);
  }
};

formName.addEventListener("blur", nameValidator);
formEmail.addEventListener("blur", emailValidator);
formPassword.addEventListener("blur", passwordValidator);
formAge.addEventListener("blur", ageValidator);
formTelephone.addEventListener("blur", telephoneValidator);
formAddress.addEventListener("blur", addressValidator);
formCity.addEventListener("blur", cityValidator);
formZipCode.addEventListener("blur", zipCodeValidator);
formDni.addEventListener("blur", dniValidator);
submitButton.addEventListener("click", submitForm);

formName.addEventListener("focus", formCorrect); //focused by clicking or pressing tab
formEmail.addEventListener("focus", formCorrect);
formPassword.addEventListener("focus", formCorrect);
formAge.addEventListener("focus", formCorrect);
formTelephone.addEventListener("focus", formCorrect);
formAddress.addEventListener("focus", formCorrect);
formCity.addEventListener("focus", formCorrect);
formZipCode.addEventListener("focus", formCorrect);
formDni.addEventListener("focus", formCorrect);

modalClose.addEventListener("click", () => (modalSign.className = "hidden"));
formName.addEventListener(
  "input",
  () => (formWelcomeSign.innerHTML = "HOLA " + formName.value)
);

const errorFunctions = [
  nameValidator,
  emailValidator,
  passwordValidator,
  ageValidator,
  telephoneValidator,
  addressValidator,
  cityValidator,
  zipCodeValidator,
  dniValidator,
];
function validateEverything() {
  let error = "";
  for (let element of errorFunctions) {
    if (element()) error = error + "- " + element() + "\n"; // if no error in any input field, error = ''
  }
  return error;
}

function formCorrect(e) {
  if (e.target.id === "name") {
    nameError.innerHTML = "";
  } else if (e.target.id === "email") {
    emailError.innerHTML = "";
  } else if (e.target.id === "password") {
    passwordError.innerHTML = "";
  } else if (e.target.id === "age") {
    ageError.innerHTML = "";
  } else if (e.target.id === "telephone") {
    telephoneError.innerHTML = "";
  } else if (e.target.id === "address") {
    addressError.innerHTML = "";
  } else if (e.target.id === "city") {
    cityError.innerHTML = "";
  } else if (e.target.id === "zip-code") {
    zipCodeError.innerHTML = "";
  } else if (e.target.id === "dni") {
    dniError.innerHTML = "";
  }
}
function numAndCharValidator(string) {
  //Analizes if there IS an error
  let countN = 0;
  let countC = 0;
  for (let char of string) {
    if (isNaN(char)) {
      countC++;
    } else {
      countN++;
    }
  }
  if (countN !== 0 && countC !== 0) {
    return false;
  }
  return true;
}
function specialCharValidator(string, includeOrExclude, ...specialChar) {
  //Analize if there IS an error
  let count = 0;
  for (let n of specialChar) {
    if (string.indexOf(n) !== -1) {
      count++; //if the character is there, adds to count
    }
  }
  if (!includeOrExclude && count !== 0) {
    return true;
  }
  if (includeOrExclude && count !== specialChar.length) {
    return true;
  }
  return false;
}

function submitForm() {
  let url = `https://curso-dev-2021.herokuapp.com/newsletter?name=${formName.value}&email=${formEmail.value}&password=${formPassword.value}&age=${formAge.value}&telephone=${formTelephone.value}&city=${formCity.value}&address=${formAddress.value}&zip-code=${formZipCode.value}&dni=${formDni.value}`;
  if (!validateEverything()) {
    fetch(url)
      .then((response) => {
        if (response.status < 200 || response.status >= 300) {
          throw Error(response.status + ": " + response.statusText);
        }
        return response.json();
      })
      .then((json) => {
        modalText.innerText = JSON.stringify(json);
        modalSign.className = "modal";
        for (let key in json) localStorage.setItem(key, json[key]);
      })
      .catch((error) => {
        modalText.innerText = error;
        modalSign.className = "modal";
      });
  } else {
    modalText.innerText = validateEverything();
    modalSign.className = "modal";
  }
}
