export function convertTemperature(scale, value) {
    let c = 0;
    let f = 0;
    let k = 0;
    if (scale === "stC") {
      c = parseFloat(value);
      f = c * (9 / 5) + 32;
      k = c + 273.15;
    } else if (scale === "stF") {
      f = parseFloat(value);
      c = (5 / 9) * (f - 32);
      k = (f + 459.67) * (5 / 9);
    } else {
      k = parseFloat(value);
      c = k - 273.15;
      f = k * (9 / 5) - 459.67;
  }
  return [c, f, k]
}
