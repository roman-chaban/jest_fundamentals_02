function expect(value) {
  return {
    toBe: (exp) => {
      if (value === exp) {
        return "Test Passed";
      } else {
        return "Test failed";
      }
    },
  };
}

const sum = (a, b) => a + b;

const nativeNull = () => null;

module.exports = { sum, nativeNull };
