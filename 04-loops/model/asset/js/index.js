const paragrafos = document.querySelector(".paragrafos");
const containerBackground = document.querySelector('.container');

const ps = paragrafos.querySelectorAll("p");

const estilosBody = getComputedStyle(document.body);
const backgrondColorBody = estilosBody.backgroundColor;

for (const p of ps) {
  p.style.backgroundColor = backgrondColorBody;
  p.style.color = '#fff';
}
