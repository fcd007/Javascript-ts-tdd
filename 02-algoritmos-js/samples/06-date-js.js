const data = new Date();
const data2 = 60 * 60 * 3 * 1000 // 3 horas em js, caso precise só fazer 1000 * tempo
console.log(data.toString());

const semana = ['Domingo', 'Segunda', 'Terça', 'Quarta','Quinta', 'Sexta', 'Sábado'];

const data3 = new Date('2021-03-27');
console.log('Dia', data3.getDate());
console.log('Mês', data3.getMonth());
console.log('Ano', data3.getFullYear());
console.log('Hora', data3.getHours());
console.log('Minutos', data3.getMinutes());
console.log('Segundos', data3.getSeconds());
console.log('Dia da semana', data3.getDay(), semana[data3.getDay()]);