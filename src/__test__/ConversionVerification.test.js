import { convertTemperature } from '../hooks/temperatureConversion'

describe("Testing convertTemperature function", () => {

  test("Converting from celsius returned correct results", () => {
    const scale = "stC";
    const value = "0";
    expect(convertTemperature(scale, value)).toEqual(["0.00", "32.00", "273.15"]);
  })

  test("Converting from celsius returned incorrect results", () => {
    const scale = "stC";
    const value = "0";
    expect(convertTemperature(scale, value)).not.toEqual(["0.00", "0.00", "0.00"]);
  })

  test("Converting from fahrenheit returned correct results", () => {
    const scale = "stF";
    const value = "32";
    expect(convertTemperature(scale, value)).toEqual(["0.00", "32.00", "273.15"]);
  })

  test("Converting from fahrenheit returned incorrect results", () => {
    const scale = "stF";
    const value = "32";
    expect(convertTemperature(scale, value)).not.toEqual(["32.00", "32.00", "32.00"]);
  })

  test("Converting from kelvin returned correct results", () => {
    const scale = "stK";
    const value = "273.15";
    expect(convertTemperature(scale, value)).toEqual(["0.00", "32.00", "273.15"]);
  })

  test("Converting from kelvin returned incorrect results", () => {
    const scale = "stK";
    const value = "273.15";
    expect(convertTemperature(scale, value)).not.toEqual(["273.15", "273.15", "273.15"]);
  })
})