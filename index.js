var kittens = ['Milo', 'Otis', 'Garfield'] //define your array here

function destructivelyAppendKitten(name) {
  kittens.push(name)
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift(name)
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop(name)
}

function appendKitten(name) {
  return [...kittens, name]
}

function prependKitten(name) {
  return [name,...kittens]
}



// Add your functions and code here
