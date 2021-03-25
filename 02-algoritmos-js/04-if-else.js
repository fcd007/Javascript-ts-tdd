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