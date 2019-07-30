const recipes = {milk: '1 cup', flour: '4 cups'}


function updateObjectWithKeyValue (recipes, key, value) {
  const newRecipes = Object.assign({}, recipes, {[key]; value})
  return newRecipes
}
