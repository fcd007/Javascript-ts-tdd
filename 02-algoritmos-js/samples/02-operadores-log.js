/*
Operadores lógicos em Javascript normalmente são usavados 
para checar operações
&& => AND => E
|| => OR => OU
! => NOT => NOT
*/
// valores literais
let dinheiro = true
let realizarCompra = true
console.log(dinheiro && realizarCompra); // true && true => true
console.log(false && realizarCompra); // false && true => false

// OR || OU
let viajar = true
let passagem = true
// true || false => true, false || true => true
console.log(viajar || passagem); // true && true => true
console.log(false || passagem); // false && true => true
//false || false => false
passagem = viajar = false
console.log(viajar || passagem); // false && false => false

// ! NOT
// !true => fale, !false => true
let valor = true
let valor2 = true
console.log(!true); // !true => false
console.log(!false); // !false => true
console.log(!valor); // !true => false
console.log(!valor2); // !true => false
//false || false => false
valor = valor2 = !false
console.log(valor, valor2); // "false, !false => true, true
