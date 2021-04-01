const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (const iterator of numeros) {
//   if (iterator === 7) {
//     continue;
//   }

//   console.log(iterator);
// }

for (const iterator of numeros) {
  if (iterator === 7) {
    console.log(`Achei o ${iterator}`);
    break;
  }

  console.log(iterator);
}
