/* window.onload = () => {
  for (let key of document.querySelectorAll(".subscribe input")) {
    if (localStorage[key.name]) key.value = localStorage[key.name];
  }
  formWelcomeSign.innerHTML = "HOLA " + formName.value;
}; */
let formName = document.getElementById("name");
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

const errorFunctions = {
  //validators should go in the HTML ORDER
  nameValidator: ({ target: { value } }) => {
    if (value.length < 6 || specialCharValidator(value, 1, " ")) {
      return (nameError.innerHTML = "Ingrese Nombre y Apellido");
    }
  },
  emailValidator: ({ target: { value } }) => {
    if (specialCharValidator(value, 1, "@", ".")) {
      return (emailError.innerHTML = "Ingrese un formato de email válido");
    }
  },
  passwordValidator: ({ target: { value } }) => {
    if (value < 8 || numAndCharValidator(value)) {
      return (passwordError.innerHTML = "La contraseña debe contener números y letras con mas de ocho caracteres ");
    }
  },
  ageValidator: ({ target: { value } }) => {
    if (value !== Math.round(value) && value < 18) {
      // Math.round works with strings
      return (ageError.innerHTML = "Ingrese un número entero mayor a 18");
    }
  },
  telephoneValidator: ({ target: { value } }) => {
    if (value.length < 7 || isNaN(value)) {
      return (telephoneError.innerHTML = "Ingrese 8 o más números sin espacios, paréntesis o guiones");
    }
  },
  addressValidator: ({ target: { value } }) => {
    if (value.length < 5 || specialCharValidator(value, 1, " ") || numAndCharValidator(value)) {
      return (addressError.innerHTML = "Ingrese una dirección y un número");
    }
  },
  cityValidator: ({ target: { value } }) => {
    if (value.length < 3) {
      return (cityError.innerHTML = "Ingrese una ciudad válida");
    }
  },
  zipCodeValidator: ({ target: { value } }) => {
    if (value.length < 3) {
      return (zipCodeError.innerHTML = "Ingrese un código postal válido");
    }
  },
  dniValidator: ({ target: { value } }) => {
    if ((value.length !== 7 && value.length !== 8) || isNaN(value)) {
      return (dniError.innerHTML = "Ingrese un DNI válido");
    }
  },
};

formName.addEventListener("blur", errorFunctions.nameValidator);
formEmail.addEventListener("blur", errorFunctions.emailValidator);
formPassword.addEventListener("blur", errorFunctions.passwordValidator);
formAge.addEventListener("blur", errorFunctions.ageValidator);
formTelephone.addEventListener("blur", errorFunctions.telephoneValidator);
formAddress.addEventListener("blur", errorFunctions.addressValidator);
formCity.addEventListener("blur", errorFunctions.cityValidator);
formZipCode.addEventListener("blur", errorFunctions.zipCodeValidator);
formDni.addEventListener("blur", errorFunctions.dniValidator);
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
function validateEverything() {
  let count = 0;
  let error = "";
  for (let element in errorFunctions) {
    let currentValue = errorFunctions[element]({ target: { value: formInputs[count].value } }); //simulates a blur event
    if (currentValue) error = error + "- " + currentValue + "\n"; // if no error in any input field, error = ''
    count++;
  }
  console.log(error);
  return error;
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
