import * as app from "../src/App.js";
import * as math from "../src/math.js";

test("Calls math.add method", () => {

    //Store the original implementation
    const originalAdd = math.add;

    //Mock add with the original implementation
    math.add = jest.fn(originalAdd);

    //Spy the calls to add
    expect(app.doAdd(1, 2)).toEqual(3);
    expect(math.add).toHaveBeenCalledWith(1, 2);

    //Override the implementation
    math.add.mockImplementation(() => 'mock');
    expect(app.doAdd(1, 2)).toEqual('mock');
    expect(math.add).toHaveBeenCalledWith(1, 2);

    //Restore the original implementation
    math.add = originalAdd;
    expect(app.doAdd(1, 2)).toEqual(3);
});