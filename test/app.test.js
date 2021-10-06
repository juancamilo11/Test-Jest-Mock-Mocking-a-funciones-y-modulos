import * as app from "../src/app.js";
import * as math from "./src/math.js";

math.add = jest.fn();
math.subtract = jest.fn();

test('Calls math.add method', () => {
  app.doAdd(5, 3);
  expect(math.add).toHaveBeenCalledWith(5, 3);
});

test('Calls math.subtract method', () => {
  app.doSubtract(20, 8);
  expect(math.subtract).toHaveBeenCalledWith(20, 8);
});

test('Calls math.multiply method', () => {
  app.doMultiply(21, 6);
  expect(math.multiply).toHaveBeenCalledWith(21, 6);
});

test('Calls math.divide method', () => {
  app.doDivide(15, 3);
  expect(math.divide).toHaveBeenCalledWith(15, 3);
});