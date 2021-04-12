//factory function
function criaPessoa(nome, sobreNome, altura, peso) {
  return {
    nome,
    sobreNome,
    fala: function (assunto) {
      return `${nome} está ${assunto}, altura ${altura} e peso ${peso}Kg`; //pega referência objeto
    },
    peso,
    altura,
    // usando get - recuperando valores
    get imc() {
      const imcPessoa = this.peso / Math.pow(this.altura, 2);
      return imcPessoa.toFixed(2);
    },

    set imc(peso) {
      this.peso = peso;
    }
  };
}

const pessoa = criaPessoa("Claudeilton", "Dantas", 1.6, 63);
const pessoa2 = criaPessoa("Livia", "Andrade", 1.70, 59);
console.log((pessoa.imc));
console.log(pessoa2.imc);
pessoa2.imc = 80;
console.log(pessoa2.imc);
// console.log(pessoa.nome);
// console.log(pessoa2.nome);
// console.log(pessoa.fala("falando sobre JS"));
// console.log(pessoa2.fala("falando sobre TS"));
