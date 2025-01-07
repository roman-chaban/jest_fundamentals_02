const axios = require("axios");
const mapArrayToStrings = require("../mapArrayToStrings/mapArrayToStrings");

const getData = async (url) => {
  try {
    const response = await axios.get(url);

    const usersIds = mapArrayToStrings(response.data.map((user) => user.id));
    return usersIds;
  } catch (error) {
    throw new Error("Users fetching error");
  }
};

module.exports = getData;
