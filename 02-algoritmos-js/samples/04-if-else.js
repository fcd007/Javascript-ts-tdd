let horaSaudacao = 6;

if (horaSaudacao >= 6 && horaSaudacao < 12) {
  console.log("Bom dia!");
}else if(horaSaudacao >= 12 && horaSaudacao < 18){
  console.log("Boa tarde");
}else if(horaSaudacao >= 18 && horaSaudacao < 24) {
  console.log("Boa noite");
}else {
  console.log("Madrugada, melhor dormir!");
}

const number = 10
//avaliar os intevalores do número com AND
if (number >= 0 && number <= 5) { //operador de igualdade inclui o valor no intervalo de avaliação
  console.log('O valor está entre 0 e 5 ');
}else {
  console.log('O valor não está entre 0 e 5');
}

//operador OR - cuidado ao avaliar de forma complexa
const number2 = 10
//avaliar os intevalores do número
if (number2 >= 0 || number2 <= 5) { 
  console.log('O valor está entre 0 e 5 ');
}else {
  console.log('O valor não está entre 0 e 5');
}
//cuidado ao usar o operador ou veja como está sendo avaliado
// (number > 0 || number == 0) || (number < 5 || number == 5) => (number > 0) => true || false
if (((number2 > 0 || number2 == 0) || (number2 < 5 || number2 == 5))) { 
  //o valor não está sendo veirifado como intervalo e sim como se ele é válido por partes
  console.log('valores possíveis: \no número pode ser maior que 0 \nou igual a 0\nou menor que 5\nou igual a 5');
}else {
  console.log('O valor não está condicionado a igualdade de 0 ou 5 e também não está entre esses valores');
}

