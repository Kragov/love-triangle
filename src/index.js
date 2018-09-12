/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    let counter = 0
  for (let i = 0; i < preferences.length; i++) {
      let firstLover = preferences[i]
      let secondLover = preferences[firstLover-1]
      let thirdLover = preferences[secondLover-1]
      if (thirdLover == (i+1)) {
          counter++
      }
  }
  return Math.floor(counter/3)
};