// http://cdn.onlinewebfonts.com/svg/img_540147.png
const theme = document.querySelector(".light");
const body = document.querySelector("body");

//colocando uma propriedade
body.style.setProperty("--cor-preto", "#000");
body.style.setProperty("--cor-branco", "#fff");

theme.addEventListener("click", function () {
  theme.textContent = theme.textContent === "🌞" ? "🌜" : "🌞";

  localStorage.setItem("tema", "claro");

  const novotema =
    body.style.getPropertyValue("--cor-branco") === "#000" ? "#fff" : "#000";
  body.style.setProperty("--cor-branco", novotema);

  const novotema1 =
    body.style.getPropertyValue("--cor-preto") === "#fff" ? "#000" : "#fff";
  body.style.setProperty("--cor-preto", novotema1);
});
