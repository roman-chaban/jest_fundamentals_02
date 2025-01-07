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
}


module.exports = Lodash;
