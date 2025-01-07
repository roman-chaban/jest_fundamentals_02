const { result } = require("lodash");

class Lodash {
  compact(array) {
    return array.map((item) => item !== false);
  }

  groupBy(array, prop) {
    const result = [];

    for (let item of array) {
      result.unshift(Math.floor(item));
    }

    return result;
  }

  sumOfValues(array) {
    return array.reduce((acc, item) => acc + item, 0);
  }
}

module.exports = Lodash;
