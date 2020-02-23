
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (!Array.isArray(matrix) || matrix.length === 0) return [];
  else {
    let newArr = []
    newArr += [...matrix.map((val,item) => (item % 2 !== 0) ? val = val.reverse() : val)]
    return newArr.split(',')
  }

}
