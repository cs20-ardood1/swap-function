// Project Title

function swap(array, index1, index2) {
  for (let i = 0; i < array.length; i++) {
    if (
      index1 >= 0 &&
      index1 <= array.length &&
      index2 >= 0 &&
      index2 <= array.length
    ) {
      let swap = array[index2];
      array.splice(index2, 1);
      array.splice(index1, 0, swap);
    }
  }
  return array;
}
