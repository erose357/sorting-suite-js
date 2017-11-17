function bubbleSort(array) {
  for (i = 0; i < array.length; i++) {
    var previous = array[0];
    var current = array[1];
    for (x = 0; x < array.length; x++) {
      if (previous > current) {
        array[x] = current;
        array[x+1] = previous;
      }
      previous = array[x + 1];
      current = array[x + 2];
    }
  }
  return array
};

module.exports = bubbleSort
