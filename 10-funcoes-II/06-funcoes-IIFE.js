// usando IIFE - Immediately invoked function express
// (function () {
//   const nome = "Dantas";
//   console.log(nome);
// })();

// const nome = "Qualquer coisa";
(function (nome, idade) {
  const sobrenome = "Dantas";
  function criaNome(nome) {
    return nome + " " + sobrenome;
  }

  function falaNome() {
    console.log(criaNome(nome));
  }

  falaNome();
  console.log(nome, sobrenome, idade);
})('Dantas', 31);
