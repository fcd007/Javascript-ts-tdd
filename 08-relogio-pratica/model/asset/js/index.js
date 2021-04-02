// const iniciar = document.querySelector(".iniciar");
// const pausar = document.querySelector(".pausar");
// const zerar = document.querySelector(".zerar");
function relogio() {
  const relogio = document.querySelector(".relogio");

  function criarHoraSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString("pt-BR", { hour12: false, timeZone: "GMT" });
  }

  let segundosTempo = 0;
  let timerPausa;

  function iniciarTempo() {
    timerPausa = setInterval(() => {
      segundosTempo++;
      relogio.innerHTML = criarHoraSegundos(segundosTempo);
    }, 1000);
  }
  //criar captura do evento de forma global para poder selecionar o clique
  document.addEventListener("click", (event) => {
    const element = event.target;

    if (element.classList.contains("iniciar")) {
      relogio.classList.remove("pausado");
      clearInterval(timerPausa);
      iniciarTempo();
    } else if (element.classList.contains("pausar")) {
      relogio.classList.add("pausado");
      clearInterval(timerPausa);
    } else if (element.classList.contains("zerar")) {
      clearInterval(timerPausa);
      relogio.innerHTML = "00:00:00";
      relogio.classList.remove("pausado");
      segundosTempo = 0;
    }
  });
}

relogio();
// iniciar.addEventListener("click", function (event) {
//   // relogio.innerHTML = tempo.toLocaleTimeString("pt-BR", { hour12: false });
//   relogio.classList.remove("pausado");
//   clearInterval(timerPausa);
//   iniciarTempo();
// });

// pausar.addEventListener("click", function (event) {
//   relogio.classList.add("pausado");
//   clearInterval(timerPausa);
// });

// zerar.addEventListener("click", function (event) {
//   clearInterval(timerPausa);
//   relogio.innerHTML = "00:00:00";
//   segundosTempo = 0;
// });
