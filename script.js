(async function load() {
  // Get the cards
  const aries = document.querySelector("#aries");
  const tauro = document.querySelector("#tauro");
  const cancer = document.querySelector("#cancer");
  const leo = document.querySelector("#leo");
  const virgo = document.querySelector("#virgo");
  const acuario = document.querySelector("#acuario");
  const piscis = document.querySelector("#piscis");
  const capricornio = document.querySelector("#capricornio");
  const sagitario = document.querySelector("#sagitario");
  const escorpio = document.querySelector("#escorpio");
  const libra = document.querySelector("#libra");
  const gemini = document.querySelector("#gemini");
  let tarots = [];
  // Get API data
  const API_URL = "https://api.adderou.cl/tyaas/";
  const response = await fetch(API_URL);
  const data = await response.json();
  tarots = data.horoscopo;
  console.log(tarots);
  addEventClick(aries, "aries");
  addEventClick(tauro, "tauro");
  addEventClick(cancer, "cancer");
  addEventClick(leo, "leo");
  addEventClick(virgo, "virgo");
  addEventClick(acuario, "acuario");
  addEventClick(capricornio, "capricornio");
  addEventClick(sagitario, "sagitario");
  addEventClick(escorpio, "escorpio");
  addEventClick(libra, "libra");
  addEventClick(gemini, "gemini");
  addEventClick(piscis, "piscis");
  function addEventClick($element, sign) {
    $element.addEventListener("click", () => {
      let nombre = tarots[sign].nombre;
      let amor = tarots[sign].amor;
      let color = tarots[sign].color;
      let dinero = tarots[sign].dinero;
      let fechaSigno = tarots[sign].fechaSigno;
      let numero = tarots[sign].numero;
      let salud = tarots[sign].salud;
      alert(
        `Amor: ${amor}\nDinero: ${dinero}\nSalud: ${salud}\nFechas del Signo: ${fechaSigno}\nColor: ${color}\nNumero de la suerte: ${numero}\n `
      );
    });
  }
})();
