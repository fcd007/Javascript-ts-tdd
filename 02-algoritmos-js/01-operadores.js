/*
Operadores de comparação
> maior que
>= maior que ou igual a 
< menor
<= menor que ou igual a 
== igualdade (valor) ** não usamos **
!= diferente (valor) **não usamos **
=== igualdade estrita (valor e tipo)
!== diferente estrito (valor e tipo)
*/

// expressões literais
// > Maior 
console.log(10 > 5); //true - value1 > value2 => return true
console.log(5 > 10); // false - value1 < value2 => return false
const result = 15 > 7
console.log(result);

// < Menor
const result2 = 15 < 7
console.log(result2);

// operador  maior ou igual a
const value = 10>= 11 // 10 > 11 || 10 == 11  => false
console.log(value);

//operador igual valor
const result3 = "7" == 7 //não verifica tipos, só valor
console.log(result3);
const result4 = 7 == 7 //não verifica tipos, só valor
console.log(result4);

//operador diferente valor
const result3 = "7" != 7 //não verifica tipos, só valor
console.log(result3);
const result4 = 7 != 7 //não verifica tipos, só valor
console.log(result4);

//operador igual estrito 
const result3 = "7" === 7 // (valor e tipo verificado)
console.log(result3);
const result4 = 7 === 7 //(valor e tipo verificado)
console.log(result4);

//



