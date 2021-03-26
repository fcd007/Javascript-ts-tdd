const form = document.querySelector('#formulario');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const pesoInput = event.target.querySelector('#peso');
  const alturaInput = event.target.querySelector('#altura');

  const peso = Number(pesoInput.value);
  const altura = Number(alturaInput.value);
  if (!peso) {
    setResultado('Peso inválido', false);
    return;
  }

  if (!altura) {
    setResultado('Altura inválida', false);
    return;
  }

   const imc = getIMC(peso, altura);
   const grauIMC = imcGrau(imc);
   const resultadoMessage = `Seu IMC = ${imc} ${grauIMC}`
   setResultado(resultadoMessage, true);
});

function imcGrau(imc) {
  const grau = [
    'Abaixo do peso', 'Peso normal', 
    'Sobrepeso', 'Obesidade grau 1', 
    'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc >= 39.9) {
      return grau[5];
    }

    if(imc >= 34.9) {
      return grau[4];
    }

    if(imc >= 29.9) {
      return grau[3];
    }

    if(imc >= 24.9){
      return grau[2];
    }

    if(imc >= 18.5){
      return grau[1];
    }else {
      return grau[0];
    }
}

function getIMC(peso, altura) {
  const imc = (peso / Math.pow(altura, 2));
  return imc.toFixed(2);
}

function createParagrafo() {
  const p = document.createElement('p');
  return p;
}

function setResultado(message,isValid) {
  const resultado = document.querySelector('#resultado');
  resultado.innerHTML = '';
  
  const p = createParagrafo()
  
  if(isValid) {
    p.classList.add('paragrafo-valid');
  }else {
    p.classList.add('paragrafo-not-valid');
  }

  p.innerHTML = message
  resultado.appendChild(p);
}