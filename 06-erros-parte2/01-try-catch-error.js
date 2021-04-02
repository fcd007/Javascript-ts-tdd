try {
  // é executado quando não ocorre erros ( não há erros)
  console.log('Abrir um socket');
  console.log('Manipular operação');
} catch (error) {
  //é executado quando ocorre erros
  console.log('Tratar o erro que ocorreu!');
} finally {
  //sempre executa
  console.log('Fechar o socket');
}
