function map(arr, callback) {
  const mapResult = [];

  for (let i = 0; i < arr.length; i++) {
    mapResult.push(callback(arr[i]));
  }

  return mapResult;
}

module.exports = { map };
