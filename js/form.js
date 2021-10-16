function formError(e) {
  //e es el tag de html
  let string = e.target.value;
  if (e.target.id === "name") {
    if (string.length < 6 || specialCharValidator(string, 1, " ")) {
      document.querySelector(".name-error").innerHTML = "Ingrese Nombre y Apellido";
    }
  } else if (e.target.id === "email") {
    if (specialCharValidator(string, 1, "@", ".")) {
      document.querySelector(".email-error").innerHTML = "Ingrese un formato de email válido";
    }
  } else if (e.target.id === "password") {
    if (string.length < 8 || numAndCharValidator(string)) {
      document.querySelector(".password-error").innerHTML = "La contraseña debe contener números y letras con mas de ocho caracteres ";
    }
  } else if (e.target.id === "age") {
    if (string !== Math.round(string) || string < 18) { // Math.round funciona con strings
      document.querySelector(".age-error").innerHTML = "Ingrese un número entero mayor a 18";
    }
  } else if (e.target.id === "tel-number") {
    if (string.length < 7 || specialCharValidator(string, 0, "(", ")", " ", "-") || isNaN(string)) {
      document.querySelector(".tel-error").innerHTML = 'Ingrese 8 o más números sin espacios, paréntesis o guiones';
    }
  } else if (e.target.id === "address") {
    if (
      string.length < 5 ||
      specialCharValidator(string, 1, " ") ||
      numAndCharValidator(string)
    ) {
      document.querySelector(".address-error").innerHTML = "Ingrese una dirección y un número";
    }
  } else if (e.target.id === "city") {
    if (string.length < 3) {
      document.querySelector(".city-error").innerHTML = "Ingrese una ciudad válida";
    }
  } else if (e.target.id === "zip-code") {
    if (string.length < 3) {
      document.querySelector(".zip-code-error").innerHTML = "Ingrese un código postal válido";
    }
  } else if (e.target.id === "dni") {
    if (string.length !== 7 || string.length !== 8 || isNaN(string)) {
      document.querySelector(".dni-error").innerHTML = "Ingrese un DNI válido";
    }
  }
}
function formCorrect(e) {
  if (e.target.id === "name") {
    document.querySelector(".name-error").innerHTML = "";
  } else if (e.target.id === "email") {
    document.querySelector(".email-error").innerHTML = "";
  } else if (e.target.id === "password") {
    document.querySelector(".password-error").innerHTML = "";
  } else if (e.target.id === "age") {
    document.querySelector(".age-error").innerHTML = "";
  } else if (e.target.id === "tel-number") {
    document.querySelector(".tel-error").innerHTML = "";
  } else if (e.target.id === "address") {
    document.querySelector(".address-error").innerHTML = "";
  } else if (e.target.id === "city") {
    document.querySelector(".city-error").innerHTML = "";
  } else if (e.target.id === "zip-code") {
    document.querySelector(".zip-code-error").innerHTML = "";
  } else if (e.target.id === "dni") {
    document.querySelector(".dni-error").innerHTML = "";
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
      count++; //si está el caracter, suma count
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
var formName = document.getElementById("name");
var formEmail = document.getElementById("email");
var formPassword = document.getElementById("password");
var formAge = document.getElementById("age");
var formTelephone = document.getElementById("tel-number");
var formAddress = document.getElementById("address");
var formCity = document.getElementById("city");
var formZipCode = document.getElementById("zip-code");
var formDni = document.getElementById("dni");

formName.addEventListener("blur", formError);
formEmail.addEventListener("blur", formError);
formPassword.addEventListener("blur", formError);
formAge.addEventListener("blur", formError);
formTelephone.addEventListener("blur", formError);
formAddress.addEventListener("blur", formError);
formCity.addEventListener("blur", formError);
formZipCode.addEventListener("blur", formError);
formDni.addEventListener("blur", formError);

formName.addEventListener("click", formCorrect);
formEmail.addEventListener("click", formCorrect);
formPassword.addEventListener("click", formCorrect);
formAge.addEventListener("click", formCorrect);
formTelephone.addEventListener("click", formCorrect);
formAddress.addEventListener("click", formCorrect);
formCity.addEventListener("click", formCorrect);
formZipCode.addEventListener("click", formCorrect);
formDni.addEventListener("click", formCorrect);

var formH1 = document.getElementById("h1");
formName.addEventListener("input", () => formH1.innerHTML = formName.value);