const diasSemana = [
  "Domingo",
  "segunda",
  "terça",
  "Quarta",
  "quinta",
  "sexta",
  "sábado",
];

for (let index = 0; index < diasSemana.length; index++) {
  const elementoDia = diasSemana[index];
  console.log(`Dia da semana: ${elementoDia}`);
}
console.log('---------------------------------------');
// index = 7, dia semana = 7 => index = 6
for (let index = diasSemana.length-1; index >= 0; index--) {
  const element = diasSemana[index];
  console.log(`Dia decrescente: ${element}`);
}
