let formName = document.getElementById("name"); //ctrl+d selects the framed word
let formEmail = document.getElementById("email");
let formPassword = document.getElementById("password");
let formAge = document.getElementById("age");
let formTelephone = document.getElementById("telephone");
let formAddress = document.getElementById("address");
let formCity = document.getElementById("city");
let formZipCode = document.getElementById("zip-code");
let formDni = document.getElementById("dni");

let nameError = document.querySelector(".name-error");
let emailError = document.querySelector(".email-error");
let passwordError = document.querySelector(".password-error");
let ageError = document.querySelector(".age-error");
let telephoneError = document.querySelector(".tel-error");
let addressError = document.querySelector(".address-error");
let cityError = document.querySelector(".city-error");
let zipCodeError = document.querySelector(".zip-code-error");
let dniError = document.querySelector(".dni-error");

let formWelcomeSign = document.getElementById("welcome-sign");
let modalSign = document.getElementById("modal");
let modalText = document.getElementById("modal-text");
let modalClose = document.getElementById("close-button");
let formInputs = Array.from(document.getElementsByClassName("input"));
let submitButton = document.getElementById("submit");

window.onload = () => {
  for (let key of formInputs) {
    if (localStorage[key.name]) key.value = localStorage[key.name];
  }
  formWelcomeSign.innerHTML = "HOLA " + formName.value;
};

const nameValidator = () => {
  if (formName.value.length < 6 || specialCharValidator(formName.value, 1, " ")) {
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
    let errorText = "La contraseña debe contener números y letras con mas de ocho caracteres ";
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
    let errorText = "Ingrese 8 o más números sin espacios, paréntesis o guiones";
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
  if ((formDni.value.length !== 7 && formDni.value.length !== 8) || isNaN(formDni.value)) {
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
formName.addEventListener("input", () => (formWelcomeSign.innerHTML = "HOLA " + formName.value));

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

let url =
  "https://curso-dev-2021.herokuapp.com/newsletter?name=Guido+Glielmi&password=guidoglielmi123&telephone=123456789&city=rosario&dni=12345678&email=guido@glielmi.com&age=26&address=lavalle+1234&zip-code=2000";
function submitForm() {
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
