export function catchError(scale, value) {
  if (value === "" && scale === "") {
    return "Please select the temperature scale and the value you want to convert";
  } else if (scale === "") {
    return "Please select the temperature scale you want to convert from the drop-down list";
  } else if (value === "") {
    return "Please enter the value you want to convert";
  } else if (isNaN(value)) {
    return "The entered value must be a number!";
  } else {
    return "";
  }
}
