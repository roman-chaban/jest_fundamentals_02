const mapArrayToStrings = (arr) => {
  return arr.filter((item) => Number.isInteger(item)).map(String);
};

module.exports = mapArrayToStrings;
