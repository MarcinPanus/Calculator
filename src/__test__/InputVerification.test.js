import { catchError } from '../hooks/errorVerification'

describe("Testing catchError function", () => {

  test("Return the appropriate error when the inputs are empty", () => {
    const scale = "";
    const value = "";
    expect(catchError(scale, value)).toBe("Please select the temperature scale and the value you want to convert");
  });

  test("Return the appropriate error when the scale input are empty", () => {
    const scale = "";
    const value = "5";
    expect(catchError(scale, value)).toBe("Please select the temperature scale you want to convert from the drop-down list");
  });

  test("Return the appropriate error when the value input are empty", () => {
    const scale = "stC";
    const value = "";
    expect(catchError(scale, value)).toBe("Please enter the value you want to convert");
  });

  test("Return the appropriate error when the value input is not a number", () => {
    const scale = "stC";
    const value = "string";
    expect(catchError(scale, value)).toBe("The entered value must be a number!");
  });
})