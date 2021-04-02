const inputTarefa = document.querySelector(".input-tarefa");
const btnTarefa = document.querySelector(".btn-tarefa");
const tarefas = document.querySelector(".tarefas");

function salvarTarefas() {
  const listaTarefas = tarefas.querySelectorAll("li");
  const listaTarefasSalva = [];

  for (let lista of listaTarefas) {
    let tarefaTexto = lista.innerText;
    tarefaTexto = tarefaTexto.replace("apagar", "").trim();
    listaTarefasSalva.push(tarefaTexto);
  }

  const tarefasJSON = JSON.stringify(listaTarefasSalva);
  localStorage.setItem('tarefas', tarefasJSON);
}

function limpaInput() {
  inputTarefa.value = "";
  inputTarefa.focus();
}

function criaLista() {
  const li = document.createElement("li");
  return li;
}

function criaBotaoApagar(lista) {
  lista.innerHTML += " ";
  const botaoApagar = document.createElement("button");
  botaoApagar.innerHTML = "apagar";
  botaoApagar.setAttribute("class", "apagar");
  lista.appendChild(botaoApagar);
}

function criaTarefa(textoInput) {
  const lista = criaLista();
  lista.innerHTML = textoInput;
  tarefas.appendChild(lista);
  limpaInput();
  criaBotaoApagar(lista);
  salvarTarefas();
}

inputTarefa.addEventListener("keypress", function (event) {
  if (event.keyCode === 13) {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
  }
});

btnTarefa.addEventListener("click", function (event) {
  if (!inputTarefa.value) return;
  criaTarefa(inputTarefa.value);
});

document.addEventListener("click", function (event) {
  const element = event.target;
  if (element.classList.contains("apagar")) {
    element.parentElement.remove();
    salvarTarefas();
  }
});

function addTarefasSalvas() {
  const tarefas = localStorage.getItem('tarefas');
  const tarefasSalvas = JSON.parse(tarefas);
  for (const tarefa of tarefasSalvas) {
    criaTarefa(tarefa);
  }
}

addTarefasSalvas();