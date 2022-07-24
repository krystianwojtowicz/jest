const analyzeArray = require("./analyzeArray");

const array = [1, 8, 3, 4, 2, 6];

test('"array = ..." should become "array aver is 4..."', () => {
  expect(analyzeArray(array)).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("array with non-number", () => {
  expect(analyzeArray([1, 2, 3, 4, "5"])).toBe("not an array");
});

test("array-like object (string)", () => {
  expect(analyzeArray("12345")).toBe("not an array");
});
