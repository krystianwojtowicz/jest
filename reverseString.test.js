const reverseString = require("./reverseString");

test('"test" should become "tset"', () => {
  expect(reverseString("test")).toBe("tset");
});
