// const iniciar = document.querySelector(".iniciar");
// const pausar = document.querySelector(".pausar");
// const zerar = document.querySelector(".zerar");

  const MILISSEGUNDOS = 1000;
  const SEGUNDOS = 60;
  const MINUTOS = 60; 
  const UM_DIA = 24;
  const UM_DIA_MILS = (UM_DIA*MINUTOS*SEGUNDOS*MILISSEGUNDOS);

  let dataAtual = new Date(); // data atual do usuário
  let dataEnvioDoPedido = new Date(); //data base para calcular o prazo
  let diasPrazoFinal = new Date(); // dias para adicionar a data atual - contagem prazo
  diasPrazoFinal.setDate(dataEnvioDoPedido.getDate() + 1); //adicionar o prazo em dias
  let diferencaEntreDatas = diasPrazoFinal.getTime() - dataEnvioDoPedido.getTime();
  console.log(diferencaEntreDatas);
    
function relogio(data) {
  const relogio = document.querySelector(".relogio");

  function criarHoraSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString("pt-BR", { hour12: false, timeZone: "GMT" });
  }

  let segundosTempo = data;
  let timerPausa;

  function iniciarTempo() {
    timerPausa = setInterval(() => {
      segundosTempo--;
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

relogio(diferencaEntreDatas);
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
