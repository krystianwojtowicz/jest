const reverseString = require("./reverseString");

test('"what about spaces" becomes "secaps tuoba tahw"', () => {
  expect(reverseString("what about spaces")).toBe("secaps tuoba tahw");
});

test('"12345" becomes "54321"', () => {
  expect(reverseString("12345")).toBe("54321");
});

test('12345 becomes "not a string"', () => {
  expect(reverseString(12345)).toBe("not a string");
});

test('"test" should become "tset"', () => {
  expect(reverseString("test")).toBe("tset");
});
