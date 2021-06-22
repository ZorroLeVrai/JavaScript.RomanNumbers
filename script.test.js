const { test, expect } = require('@jest/globals');
const script = require('./script.js');

test("Digit to Roman", () => {
  expect(script.digitalToRoman(19)).toBe("XIX");
  expect(script.digitalToRoman(21)).toBe("XXI");
});

test("Romanto Digit", () => {
  expect(script.romanToDigital("XIX")).toBe(19);
  expect(script.romanToDigital("IIC")).toBe(98);
});