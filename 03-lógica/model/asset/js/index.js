const h1 = document.querySelector(".container h1");
const data = new Date();
function getDiaSemana(diaSemana) {
  const diasSemana = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ];
  return diasSemana[diaSemana];
}

function getMes(numeroMes) {
  const numeroMeses = [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maior",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro",
  ];
  return numeroMeses[numeroMes];
}

function zeroEsquerda(num) {
  return num >= 10 ? num : `0${num}`;
}

function criarData(data) {
  const diaSemana = data.getDay();
  const numeroMes = data.getMonth();

  const nomeDia = getDiaSemana(diaSemana);
  const nomeMes = getMes(numeroMes);

  return (
    `${nomeDia}, ${data.getDate()} de ${nomeMes}` +
    ` de ${data.getFullYear()}` + 
    ` ${zeroEsquerda(data.getHours())}:${zeroEsquerda(data.getMinutes())}`
  );
}

h1.innerHTML = criarData(data);
// const options = { dateStyle: "medium", timeStyle: "medium" };
// h1.innerHTML = data.toLocaleString("pt-BR", {
//   dateStyle: "full",
//   timeStyle: "short",
// });

// function dataFormart(date) {
//   const diaData = date.getDay(); //pega o dia da semana [0-6]
//   const diaMes = date.getDate(); //pega dia do mês
//   const mesData = date.getMonth(); //pegar o mes
//   const anoData = dataNow.getFullYear(); // pega ano
//   const horaData = dataNow.getHours(); // pega hora
//   const minutosData = dataNow.getMinutes(); //pega minuto

//   let diaSemanaDataMesAno = "";
//   const semana = [
//     "Domingo",
//     "Segunda-feira",
//     "Terça-feira",
//     "Quarta-feira",
//     "Quinta-feira",
//     "Sexta-feira",
//     "Sábado",
//   ];

//   const mes = [
//     "janeiro",
//     "fevereiro",
//     "março",
//     "abril",
//     "maior",
//     "junho",
//     "julho",
//     "agosto",
//     "setembro",
//     "outubro",
//     "novembro",
//     "dezembro",
//   ];

//   switch (diaData) {
//     case 0:
//       diaSemanaDataMesAno = `${semana[diaData]}
//       ${diaData} de ${mes[mesData]} de ${anoData} ${horaData}:${minutosData}`;
//       break;
//     case 1:
//       diaSemanaDataMesAno = `${semana[diaData]}
//       ${diaMes} de ${mes[mesData]} de ${anoData} ${horaData}:${minutosData}`;
//       break;
//     case 2:
//       diaSemanaDataMesAno = `${semana[diaData]}
//       ${diaMes} de ${mes[mesData]} de ${anoData} ${horaData}:${minutosData}`;
//       break;
//     case 3:
//       diaSemanaDataMesAno = `${semana[diaData]}
//       ${diaMes} de ${mes[mesData]} de ${anoData} ${horaData}:${minutosData}`;
//       break;
//     case 4:
//       diaSemanaDataMesAno = `${semana[diaData]}
//       ${diaMes} de ${mes[mesData]} de ${anoData} ${horaData}:${minutosData}`;
//       break;
//     case 5:
//       diaSemanaDataMesAno = `${semana[diaData]}
//       ${diaMes} de ${mes[mesData]} de ${anoData} ${horaData}:${minutosData}`;
//       break;
//     case 6:
//       diaSemanaDataMesAno = `${semana[diaData]}
//       ${diaMes} de ${mes[mesData]} de ${anoData} ${horaData}:${minutosData}`;
//       break;
//     default:
//       diaSemanaDataMesAno = "Dia da semana inválido, tente novamente!";
//       break;
//   }
//   return diaSemanaDataMesAno;
// }

// setResultado(dataFormart(dataNow), true);

// function createParagrafo() {
//   const p = document.createElement("p");
//   return p;
// }

// function setResultado(message, isValid) {
//   const resultado = document.querySelector("#resultado");
//   resultado.innerHTML = "";

//   const p = createParagrafo();

//   if (isValid) {
//     p.classList.add("paragrafo-valid");
//   } else {
//     p.classList.add("paragrafo-not-valid");
//   }

//   p.innerHTML = message;
//   resultado.appendChild(p);
// }
