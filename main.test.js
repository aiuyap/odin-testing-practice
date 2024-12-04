import { capitalize, reverseString, calculator, caesarCipher } from "./main";

test("Capitalize aiu -> AIU", () => {
  expect(capitalize("aiu")).toBe("AIU");
});

test("Reverse string `asdfgh`", () => {
  expect(reverseString("asdfgH")).toBe("Hgfdsa");
});

const calc = calculator();

test("Calc addition", () => {
  expect(calc.add(4, 12)).toBe(16);
});

test("Calc subtraction", () => {
  expect(calc.sub(12, 4)).toBe(8);
});

test("Calc division", () => {
  expect(calc.div(12, 4)).toBe(3);
});

test("Calc multiplication", () => {
  expect(calc.mult(4, 4)).toBe(16);
});

test("Caeser Cipher test", () => {
  expect(caesarCipher("def", 3)).toBe("ghi");
});

test("Caeser Cipher wrapping test", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("Caeser Cipher case preservation test", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("Caeser Cipher case preservation test", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});
