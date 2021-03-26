const form = document.querySelector('#formulario');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('Evento não executado');
})