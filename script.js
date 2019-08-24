// Get the cards
const aries = document.getElementById('aries')
const tauro = document.getElementById('tauro')
const cancer = document.getElementById('cancer')
const leo = document.getElementById('leo')
const virgo = document.getElementById('virgo')
const acuario = document.getElementById('acuario')
const piscis = document.getElementById('piscis')
const capricornio = document.getElementById('capricornio')
const sagitario = document.getElementById('sagitario')
const escorpio = document.getElementById('escorpio')
const libra = document.getElementById('libra')
const gemini = document.getElementById('gemini')

// Get API data
const API_URL = 'https://api.adderou.cl/tyaas/'
const opts = {
  crossDomain: true
}
function obtenerPersonaje(id) {
  return new Promise((resolve, reject) => {
    const url = `${API_URL}`
    $
      .get(url, opts, function(data) {
        resolve(data)
      })
      .fail(() => reject())
  })
}

this.signos = {
  aries,
  tauro,
  cancer,
  virgo,
  leo,
  acuario,
  piscis,
  sagitario,
  capricornio,
  escorpio,
  libra,
  gemini
}


function clicka () {
  document.getElementById("aries").addEventListener("click", this.getSign);
  document.getElementById("tauro").addEventListener("click", this.getSign);
  document.getElementById("cancer").addEventListener("click", this.getSign);
  document.getElementById("virgo").addEventListener("click", this.getSign);
  document.getElementById("leo").addEventListener("click", this.getSign);
  document.getElementById("acuario").addEventListener("click", this.getSign);
  document.getElementById("piscis").addEventListener("click", this.getSign);
  document.getElementById("sagitario").addEventListener("click", this.getSign);
  document.getElementById("capricornio").addEventListener("click", this.getSign);
  document.getElementById("escorpio").addEventListener("click", this.getSign);
  document.getElementById("libra").addEventListener("click", this.getSign);
  document.getElementById("gemini").addEventListener("click", this.getSign);

}
function getSign(){
  alert('djksadjla')
}

clicka()
