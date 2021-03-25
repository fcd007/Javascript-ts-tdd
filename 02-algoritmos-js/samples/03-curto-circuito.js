/* **********************************************************************************************
  && => todas as expressões verdadeiras para retornar true ou verdade
  Quando temos uma expressão falsa não é verificado mais os valores de 
  expressões seguintes para o operador && And
  ************************************************************************************************
  || => Uma expressão verdadeira todas as demais são verdades, apenas falso quando tudo for falso
  Logo todos as expressões depois de uma verdadeira não são avaliadas - isso otimiza resultados
*/
console.log('Dantas' && 0 && 'Francisco'); // retorna o valor falso => 0
console.log('Dantas' && true && 'Francisco'); // retorna o valor true => Francisco
console.log('Dantas' && true && NaN); // retorna o valor true => Francisco
// valores avaliados em false e true
/**
 * falsy values
 * 0 => falso
 * '', "", ``, =>false
 * null, undefined => false
 * NaN => false
 */
console.log('João' && '' && "Maria"); //return ''
console.log('João' && NaN && "Maria"); //return NaN
console.log('João' && undefined && "Maria"); //return undefined

function mostraOi() {
  return 'Oi!'
}
// para funções temos os resultados
let executaValor = 'Oi Executei'
console.log(executaValor && mostraOi());
executaValor = false //será mostrado o valor da expressão valor
console.log(executaValor && mostraOi());

// OR precisa de qualquer valor true para validar expressão retorno válido
console.log(0 || false || null || '' || null); // valor de retorno último valor falso

//fazendp verificação de tipos falsos e o retorno do OR ||
a = false
b = null
c = NaN
d = '' // caso seja string os valores '' e "" são falsos o restante true
e = 0
console.log(a || b || c || d || e); //retorna o último falso