import * as app from "../src/App.js";
import * as math from "../src/math.js";

//Mocking the module math.js
jest.mock("./src/math.js");
test("Calls math.add method", () => {
    app.doAdd(1, 2);
    expect(math.add).toHaveBeenCalledWith(1, 2);
});

test("Calls math.subtract method", () => {
    app.doSubtract(5, 2);
    expect(math.subtract).toHaveBeenCalledWith(5, 2);
});

test("Calls math.multiply method", () => {
    app.doMultiply(10, 30);
    expect(math.multiply).toHaveBeenCalledWith(10, 30);
});

test("Calls math.divide method", () => {
    app.doDivide(20, 4);
    expect(math.divide).toHaveBeenCalledWith(20, 4);
});