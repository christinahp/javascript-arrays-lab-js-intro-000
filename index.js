var kittens = ['Milo', 'Otis', 'Garfield'] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}

var destructivelyRemoveLastKitten = () => {
  kittens.pop()
  return kittens
}

var destructivelyRemoveFirstKitten = () => {
  kittens.shift()
  return kittens
}

var appendKitten = (name) => {
  var newKittenArray = kittens.push(name)
  return newKittenArray
}
