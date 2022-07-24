const cipher = require("./cipher");

test('"string w" should become "tusjoh x"', () => {
  expect(cipher("string w")).toBe("tusjoh x");
});

test('"String, w" should become "Tusjoh, x"', () => {
  expect(cipher("String, w")).toBe("Tusjoh, x");
});

test('"string, w" should become "tusjoh, x"', () => {
  expect(cipher("string, #w")).toBe("tusjoh, #x");
});

test('"1" should become "not a string"', () => {
  expect(cipher("1")).toBe("not a string");
});
