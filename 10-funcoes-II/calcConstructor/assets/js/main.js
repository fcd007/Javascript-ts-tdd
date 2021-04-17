function Calculadora() {
  this.display = document.querySelector(".display");

  this.capturaCliques = () => {
    document.addEventListener("click", (evento) => {
      const elemento = evento.target;
      if (elemento.classList.contains("btn-num")) this.addNumero(elemento);
      if (elemento.classList.contains("btn-clear")) this.clear();
      if (elemento.classList.contains("btn-del")) this.deletar();
      if (elemento.classList.contains("btn-eq")) this.resultadoConta(elemento);
    });
  };

  this.addNumero = (elemento) => (this.display.value += elemento.innerText);
  this.clear = () => (this.display.value = "");
  this.deletar = () => (this.display.value = this.display.value.slice(0, -1));
  this.resultadoConta = (elemento) => (eval(this.display.value));

  this.inicia = () => {
    this.capturaCliques();
  };
}

//use molde e crie um objeto Calculadora
const calculadora = new Calculadora();
calculadora.inicia();
