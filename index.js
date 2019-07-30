const recipes = {milk: '1 cup', flour: '4 cups'}


function updateObjectWithKeyValue (recipe, key, value) {
  const newRecipe = Object.assign({}, recipe, {[key]; value})
  return newRecipe
}
