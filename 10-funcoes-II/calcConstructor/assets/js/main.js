function Calculadora() {
  this.display = document.querySelector(".display");

  this.inicia = () => {
    this.capturaCliques();
    this.capturaEnter();
  };

  this.capturaEnter = () => {
    const keyCodeEnter = 13; //código da tecla enter
    document.addEventListener("keyup", (event) => {
      if (event.keyCode === keyCodeEnter) {
        this.resultadoConta();
      }
    });
  };

  this.capturaCliques = () => {
    document.addEventListener("click", (evento) => {
      const elemento = evento.target;
      if (elemento.classList.contains("btn-num")) this.addNumero(elemento);
      if (elemento.classList.contains("btn-clear")) this.clear();
      if (elemento.classList.contains("btn-del")) this.deletar();
      if (elemento.classList.contains("btn-eq")) this.resultadoConta(elemento);
    });
  };

  this.addNumero = (elemento) => {
    this.display.value += elemento.innerText;
    this.display.focus();
  };
  this.clear = () => (this.display.value = "");
  this.deletar = () => (this.display.value = this.display.value.slice(0, -1));
  this.resultadoConta = () => {
    let conta = this.display.value;

    try {
      conta = eval(conta);

      if (!conta && conta !== 0) {
        alert("Conta inválida");
        console.log(conta, "try");
        return;
      }

      this.display.value = conta;
    } catch (error) {
      alert("Conta inválida");
      console.log(conta, "catch");
      return;
    }
  };
}
//use molde e crie um objeto Calculadora
const calculadora = new Calculadora();
calculadora.inicia();
