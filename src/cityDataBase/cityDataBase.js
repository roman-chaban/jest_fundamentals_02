let cityDatabase = [];

function initializeCityDatabase() {
  cityDatabase = ["Vienna", "San Juan", "New York", "Berlin"];
}

function clearCityDataBase() {
  cityDatabase = [];
}

function isCity(cityName) {
  return cityDatabase.includes(cityName);
}

module.exports = { initializeCityDatabase, clearCityDataBase, isCity };
