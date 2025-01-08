const { default: axios, isAxiosError } = require("axios");

class Ajax {
  static echo(data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (data) {
          resolve(data);
        } else {
          reject(new Error("Error"));
        }
      }, 1000);
    });
  }

  static async get() {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      return response;
    } catch (error) {
      if (isAxiosError(error)) {
        console.log(error.message);
      }
    }
  }
}

module.exports = Ajax;
