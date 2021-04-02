const relogio = document.querySelector(".relogio");
const iniciar = document.querySelector(".iniciar");
const pausar = document.querySelector(".pausar");
const zerar = document.querySelector(".zerar");

function criarHoraSegundos(segundos) {
  const data = new Date(segundos * 1000);
  return data.toLocaleTimeString("pt-BR", { hour12: false, timeZone: "GMT" });
}

let segundosTempo = 0;
let timerPausa;

function iniciarTempo() {
  timer = setInterval(() => {
    segundosTempo++;
    relogio.innerHTML = criarHoraSegundos(segundosTempo);
  }, 1000);
}
iniciar.addEventListener("click", function (event) {
  // relogio.innerHTML = tempo.toLocaleTimeString("pt-BR", { hour12: false });
  iniciarTempo();
});

pausar.addEventListener("click", function (event) {
  clearInterval(timer);
});

zerar.addEventListener("click", function (event) {
  clearInterval(timer);
  relogio.innerHTML = "00:00:00";
});
