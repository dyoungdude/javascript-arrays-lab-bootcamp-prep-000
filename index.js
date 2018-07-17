var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(){
  kittens.push("Ralph");
  return kittens;
}

function destructivelyPrependKitten(){
  kittens.unshift('Bob');
  return kittens;
}

function destructivelyRemoveLastKitten(){
  return kittens.pop();
}

function destructivelyRemoveFirstKitten(){
  return kittens.shift();
}

function appendKitten(){
  return [...kittens, "Broom"];
}

function prependKitten(){
  return ["Arnold", ...kittens];
}
