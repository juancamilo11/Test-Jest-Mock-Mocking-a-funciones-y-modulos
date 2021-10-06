import * as app from "../src/app.js";
import * as math from "./src/math.js";

math.add = jest.fn();
math.subtract = jest.fn();

test("calls math.add method", () => {
  app.doAdd(1, 2);
  expect(math.add).toHaveBeenCalledWith(1, 2);
});

test("calls math.subtract method", () => {
  app.doSubtract(1, 2);
  expect(math.subtract).toHaveBeenCalledWith(1, 2);
});

test("calls math.multiply method", () => {
  app.doMultiply(1, 2);
  expect(math.multiply).toHaveBeenCalledWith(1, 2);
});

test("calls math.divide method", () => {
  app.doDivide(1, 2);
  expect(math.divide).toHaveBeenCalledWith(1, 2);
});