function standardizeInput(collection) {
  return Array.isArray(collection) ? collection : Object.values(collection)
}

function myEach(collection, callback) {
  let newCollection = standardizeInput(collection)

  for(let i = 0; i < newCollection.length; i++) {
   callback(newCollection[i])
  }
  return collection
}

function myMap(collection, callback) {
  let newCollection = standardizeInput(collection)
  let changedCollection = []
  for(let i = 0; i < newCollection.length; i++) {
    changedCollection.push(callback(newCollection[i]))
  }
  return changedCollection
}

function myReduce(collection, callback, acc=0) {
  let newCollection = standardizeInput(collection)

  for(let i = 0; i< newCollection.length; i++) {
    acc = callback(acc, newCollection[i], newCollection)
  }
  return acc
}

// let call = function(acc, val, collection){ 
//   return acc + val;
// }

// myReduce({one:1,two:2}, call, 2)

function myFind(collection, predicate) {
  let newCollection = standardizeInput(collection)

  for(let i = 0; i< newCollection.length; i++) {
    if (predicate(newCollection[i]) === true) {
      return newCollection[i]
    }
  }
}

function myFilter(collection, predicate) {
  let newCollection = standardizeInput(collection)
  let arrayOfTruths = []

  for(let i = 0; i< newCollection.length; i++) {
    if(predicate(newCollection[i]) === true) {
      arrayOfTruths.push(newCollection[i])
    }
  }
  return arrayOfTruths
}

function mySize(collection) {
  let newCollection = standardizeInput(collection)
  let length = 0
  for(let i = 0; i< newCollection.length; i++) {
    length = length + 1
  }
  return length
}

function myFirst(array, n = 0) {
  let firstArray = []
  if (n !== 0) {
  for(let i = 0; i< n; i++) {
    firstArray.push(array[i])
  }
  return firstArray
} else return array[0]
}

function myLast(array, n=array.length - 1) {
  let lastArray = []
  if (n !== array.length - 1) {
   return array.slice(array.length-n, array.length)
  }
else return array[n]
}

function myKeys(object) {
  let keysArray = []

  for(let item in object) {
    keysArray.push(item)
  }
  return keysArray
}

function myValues(object) {
  let keysArray = []

  for(let item in object) {
    keysArray.push(object[`${item}`])
  }
  return keysArray
}






