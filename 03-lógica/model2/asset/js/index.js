const elementos = [
  { tag: "p", texto: "Frase 1" },
  { tag: "div", texto: "Frase 2" },
  { tag: "footer", texto: "Frase 3" },
  { tag: "section", texto: "Frase 4" },
];

const container = document.querySelector('.container');
const div = document.createElement('div');

// for (let index = 0; index < elementos.length; index++) {
//   let { tag, texto } = elementos[index]
//   let tagCriada = document.createElement(tag);
//   tagCriada.innerHTML = texto;
//   div.appendChild(tagCriada)
// } 

//usando innerText
// for (let index = 0; index < elementos.length; index++) {
//     let { tag, texto } = elementos[index]
//     let tagCriada = document.createElement(tag);
//     tagCriada.innerText = texto;
//     div.appendChild(tagCriada)
//   } 

//usando um nó de texto
for (let index = 0; index < elementos.length; index++) {
  let { tag, texto } = elementos[index]
  let tagCriada = document.createElement(tag);
  let textoCriado = document.createTextNode(texto);
  tagCriada.appendChild(textoCriado);
  div.appendChild(tagCriada)
} 
container.appendChild(div);