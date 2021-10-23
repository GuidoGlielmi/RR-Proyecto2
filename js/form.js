window.onload = () => {
  for (let key in localStorage) {
    if (document.querySelector(`input[name=${key}]`)) document.getElementById(key).value = localStorage[key];
  }
};
function formError(e) {
  let error;
  let string = e.target.value;
  if (e.target.id === "name") {
    if (string.length < 6 || specialCharValidator(string, 1, " ")) {
      nameError.innerHTML = error = "Ingrese Nombre y Apellido";
    }
  } else if (e.target.id === "email") {
    if (specialCharValidator(string, 1, "@", ".")) {
      emailError.innerHTML = error = "Ingrese un formato de email válido";
    }
  } else if (e.target.id === "password") {
    if (string.length < 8 || numAndCharValidator(string)) {
      passwordError.innerHTML = error = "La contraseña debe contener números y letras con mas de ocho caracteres ";
    }
  } else if (e.target.id === "age") {
    if (string !== Math.round(string) && string < 18) {
      // Math.round works with strings
      ageError.innerHTML = error = "Ingrese un número entero mayor a 18";
    }
  } else if (e.target.id === "telephone") {
    if (string.length < 7 || isNaN(string)) {
      telephoneError.innerHTML = error = "Ingrese 8 o más números sin espacios, paréntesis o guiones";
    }
  } else if (e.target.id === "address") {
    if (string.length < 5 || specialCharValidator(string, 1, " ") || numAndCharValidator(string)) {
      addressError.innerHTML = error = "Ingrese una dirección y un número";
    }
  } else if (e.target.id === "city") {
    if (string.length < 3) {
      cityError.innerHTML = error = "Ingrese una ciudad válida";
    }
  } else if (e.target.id === "zip-code") {
    if (string.length < 3) {
      zipCodeError.innerHTML = error = "Ingrese un código postal válido";
    }
  } else if (e.target.id === "dni") {
    if ((string.length !== 7 && string.length !== 8) || isNaN(string)) {
      dniError.innerHTML = error = "Ingrese un DNI válido";
    }
  }
  if (error) alert(error);
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
  //analiza si HAY error
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
  //analiza si HAY error
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

formName.addEventListener("blur", formError);
formEmail.addEventListener("blur", formError);
formPassword.addEventListener("blur", formError);
formAge.addEventListener("blur", formError);
formTelephone.addEventListener("blur", formError);
formAddress.addEventListener("blur", formError);
formCity.addEventListener("blur", formError);
formZipCode.addEventListener("blur", formError);
formDni.addEventListener("blur", formError);

formName.addEventListener("focus", formCorrect); //focused by clicking or pressing tab
formEmail.addEventListener("focus", formCorrect);
formPassword.addEventListener("focus", formCorrect);
formAge.addEventListener("focus", formCorrect);
formTelephone.addEventListener("focus", formCorrect);
formAddress.addEventListener("focus", formCorrect);
formCity.addEventListener("focus", formCorrect);
formZipCode.addEventListener("focus", formCorrect);
formDni.addEventListener("focus", formCorrect);

let formWelcomeSign = document.getElementById("welcome-sign");
formName.addEventListener("input", () => (formWelcomeSign.innerHTML = "HOLA " + formName.value));

let modalSign = document.getElementById("modal");
let modalContent = document.getElementById("modal-content");
let modalText = document.getElementById("modal-text");
let modalClose = document.getElementById("close-button");
modalClose.addEventListener("click", () => (modalSign.className = "hidden"));

let url =
  "http://curso-dev-2021.herokuapp.com/newsletter?name=Guido+Glielmi&password=guidoglielmi123&telephone=123456789&city=rosario&dni=12345678&email=guido@glielmi.com&age=26&address=lavalle+1234&zip-code=2000";
let submitButton = document.getElementById("submit");
submitButton.addEventListener("click", submitForm);
function submitForm() {
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
}
