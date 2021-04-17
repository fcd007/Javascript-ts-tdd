//criando uma factory function
function criaCalculadora(params) {
  return {
    display: document.querySelector(".display"),

    inicia() {
      this.clickButtoes();
      this.pressionaEnter();
    },

    pressionaEnter() {
      const keyCodeEnter = 13; //código da tecla enter

      this.display.addEventListener("keyup", (event) => {
        if (event.keyCode === keyCodeEnter) {
          this.realizaConta();
        }
      });
    },

    clickButtoes() {
      document.addEventListener("click", (event) => {
        const element = event.target;
        if (element.classList.contains("btn-num")) {
          this.btnParaDisplay(element.innerText);
        }

        if (element.classList.contains("btn-clear")) {
          this.clearDisplay();
        }

        if (element.classList.contains("btn-del")) {
          this.apagaUmElemento();
        }

        if (element.classList.contains("btn-eq")) {
          this.realizaConta();
        }
      }); //use o this clickButtoes()
    },

    btnParaDisplay(valor) {
      this.display.value += valor;
    },

    clearDisplay() {
      this.display.value = "";
    },

    apagaUmElemento() {
      this.display.value = this.display.value.slice(0, -1); //removendo apenas o último elemento
    },

    realizaConta() {
      let conta = this.display.value;

      try {
        conta = eval(conta);

        if (!conta && conta !== 0) {
          alert("Conta inválida");
          console.log(conta, 'try');
          return;
        }

        this.display.value = conta;
      } catch (error) {
        alert("Conta inválida");
        console.log(conta, 'catch');
        return;
      }
    },
  };
}

const calculadora = criaCalculadora();
calculadora.inicia();
