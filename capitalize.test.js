const capitalize = require("./capitalize");

test('"string w" should become "String w"', () => {
  expect(capitalize("string w")).toBe("String w");
});

// test('"string" should become "String"', () => {
//   expect(capitalize("string")).toBe("String");
// });

// test('"String" should become "String"', () => {
//   expect(capitalize("String")).toBe("String");
// });

// test('"1string" should become "1String"', () => {
//   expect(capitalize("1string")).toBe("1String");
// });

// test('"1g" should become "1G"', () => {
//   expect(capitalize("1g")).toBe("1G");
// });

// test('"1G" should become "1G"', () => {
//   expect(capitalize("1G")).toBe("1G");
// });

// test('"12" should become "no valid characters"', () => {
//   expect(capitalize("12")).toBe("no valid characters");
// });

// test('"@#$" should become "no valid characters"', () => {
//   expect(capitalize("@#$")).toBe("no valid characters");
// });

// test('1234 should become "no valid characters"', () => {
//   expect(capitalize(1234)).toBe("no valid characters");
// });
