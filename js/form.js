function formError(e) {
  //e es el tag de html
  let string = e.target.value;
  if (e.target.id === "name") {
   
  } else if (e.target.id === "email") {
   
  } else if (e.target.id === "password") {
   
  } else if (e.target.id === "age") {
   
  } else if (e.target.id === "tel-number") {
    
  } else if (e.target.id === "address") {
   
  } else if (e.target.id === "city") {
    
  } else if (e.target.id === "zip-code") {
   
  } else if (e.target.id === "dni") {
   
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