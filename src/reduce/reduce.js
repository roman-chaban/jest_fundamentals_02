function myReduce(array, callback, initialValue) {
  let accumulator = initialValue !== undefined ? initialValue : array[0];

  let startIndex = initialValue !== undefined ? 0 : 1;

  for (let i = startIndex; i < array.length; i++) {
    accumulator = callback(accumulator, array[i], array);
  }

  return accumulator;
}

module.exports = myReduce;