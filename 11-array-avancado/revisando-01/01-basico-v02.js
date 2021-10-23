const nomes = ['Eduardo', 'Maria', 'Joana'];
nomes[2] = 'João';

//delete nomes[2];
console.log('====================================');
console.log(nomes);
console.log('====================================');

//valor por referência
// Os array passam os valores por referência
const novo1 = nomes;
const nomeCopia = novo1.pop();
console.log('====================================');
console.log(nomes);
console.log(novo1);
console.log('====================================');

//fazendo uso do spreed operator para realizar copia de dados
const novo2 = [...nomes];
//removendo um item do array que foi copiado os dados para novo2
const removido = nomes.pop(); //remove do final do array
const removido2 = novo2.shift(); //remove do inicio do array
console.log(removido);
console.log(removido2);

// verificar o tamanho do array ou elementos que possui
console.log(nomes.length); //length é um atributo do array e não uma função ou método
console.log(novo2.length);

//adicionado elementos do array
//adicionando elementos no final do array
nomes.push(removido);
nomes.push(removido2)
console.log(nomes);
//adicionando no início do array
nomes.unshift('Carlos');
console.log(nomes);

//fatiando o array
//quero apenas pegar o indice 1 ao 3, sendo que o 3 não entra no array gerado - dica 1,2
const nomesFatiado = nomes.slice(1,3); 
console.log(nomesFatiado);
// quero remover elemento partindo do final para início, quero pegar do 0 ao final -1 elemento
const nomesFatiado2 = nomes.slice(0,-1) // podemos remover -2, -3 até chegar no elemento inicial
console.log(nomesFatiado2);


// como converter uma string para um array - separar usando split
const nomeCompleto = 'Francisco Claudeilton Dantas';
const nomeSeparado = nomeCompleto.split(' '); // o quê irá fazer?
// criamos um novo array com elementos que foram separados pelo espaço
console.log(nomeSeparado);

//fazendo a separação pela virgula ','
const nomeCompleto2 = 'Francisco,Claudeilton,Dantas';
const nomeSeparado2 = nomeCompleto2.split(', '); // o quê irá fazer?
// criamos um novo array com elementos que foram separados pela virgula
console.log(nomeSeparado2);

//como realizar uma conversão de array para string
const nomesArray = ['Francisco', 'Claudeilton', 'Dantas'];
console.log(nomesArray);
//realizando a junção dos elementos para poder criar a string - join('')
const nomeArrayToString = nomesArray.join(' ');
console.log(nomeArrayToString);