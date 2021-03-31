const pessoa = {
  nome: 'Claudeilton',
  sobrenome: 'Dantas',
  idade: 31,
  endereco: {
    logradouro: 'Rua Pedro José Soares, 517',
    numero: 517
  }
}

 const { nome, idade, endereco } = pessoa;
console.log(nome, idade, endereco);