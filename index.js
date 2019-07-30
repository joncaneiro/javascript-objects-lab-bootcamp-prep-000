const recipes = {milk: '1 cup', flour: '4 cups'}


function updateObjectWithKeyValue (object, key, value) {
  const newRecipes = Object.assign({}, object, {[key]: value})
  return newRecipes
}


function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}