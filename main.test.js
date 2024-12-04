const capitalize = require("./main");

test("Capitalize aiu -> AIU", () => {
  expect(capitalize("aiu")).toBe("AIU");
});
