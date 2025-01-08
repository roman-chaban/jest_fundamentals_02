const { fetchData } = require("../fetchData/fetchData");

function forEach(array, callback) {
  for (const item of array) {
    callback(item);
  }
}

const getData = async () => {
  const dataResult = await fetchData();
  return `Processed: ${dataResult}`;
};

module.exports = { forEach, getData };
