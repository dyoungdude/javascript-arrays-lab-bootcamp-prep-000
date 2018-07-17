var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(kittens, name){
  var name = "Ralph"
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(kittens, name){
  var name = "Bob"
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten(){
  return kittens.pop();
}
