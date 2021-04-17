function recursivaNumeros(max) {
  console.log(max);
  if (max >= 1000) return;
  max++;
  recursivaNumeros(max);
}

recursivaNumeros(0);
