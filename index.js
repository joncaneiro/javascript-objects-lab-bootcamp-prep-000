const recipes = {milk: '1 cup', flour: '4 cups'}

function updateObjectWithKeyValue (object, key, value) {
  var newRecipe = Object.assign({}, recipe, {[key]; value} )
  return newRecipe
}

