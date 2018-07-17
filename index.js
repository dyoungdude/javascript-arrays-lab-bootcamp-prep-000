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
