// try {
//   // é executado quando não ocorre erros ( não há erros)
//   console.log("Abrir um socket");
//   console.log("Manipular operação");
// } catch (error) {
//   //é executado quando ocorre erros
//   console.log("Tratar o erro que ocorreu!");
// } finally {
//   //sempre executa
//   console.log("Fechar o socket");
// }

function mostraHora(data) {
  if (data && !(data instanceof Date)) {
    throw new TypeError("Esperando uma instância de hora!");
  }

  if (!data) {
    data = new Date();
  }

  return data.toLocaleTimeString("pt-BR", {});
}

try {
  const dataAtual = new Date("01-01-1970 12:58:12");
  const hora = mostraHora(11);
  // const hora = mostraHora(dataAtual);
  console.log(hora);
} catch (error) {
  //executa quando dá erro - tratar erro
  console.log(error);
}finally {
  console.log("Sempre executa, bora codar melhor!");
}
