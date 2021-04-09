function rand(min = 1000, max = 3000) {
  const num = Math.random() * (max - min) + min;
  return num;
}

function function1(callback) {
  setTimeout(function () {
    console.log("function01");
    if (callback) callback();
  }, rand());
}

function function2(callback) {
  setTimeout(function () {
    console.log("function02");
    if (callback) callback();
  }, rand());
}

function function3(callback) {
  setTimeout(function () {
    console.log("function03");
    if (callback) callback();
  }, rand());
}

function1(f01callback);

function f01callback() {
  function2(f02callback);
}

function f02callback() {
  function3(f03callback);
}

function f03callback() {
  console.log("Olá mundo!");
}
