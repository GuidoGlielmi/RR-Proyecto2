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
