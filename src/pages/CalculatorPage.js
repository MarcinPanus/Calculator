import React, {useState} from "react";
import Header from "../components/Header";
import InputForm from "../components/InputForm";
import OutputResults from "../components/OutputResults";
import {catchError} from "../hooks/errorVerification";
import {convertTemperature} from "../hooks/temperatureConversion";

function CalculatorPage() {
  const [error, setError] = useState("");
  const [dataInput, setDataInput] = useState({scale: "", value: ""});
  const [dataOutput, setDataOutput] = useState({
    celsius: 0,
    fahrenheit: 0,
    kelvin: 0,
  });

  const convert = () => {
    setError(catchError(dataInput.scale, dataInput.value));

    if (catchError(dataInput.scale, dataInput.value) === "") {
      setDataOutput({
        ...dataOutput,
        celsius: convertTemperature(
          dataInput.scale,
          dataInput.value
        )[0],
        fahrenheit: convertTemperature(
          dataInput.scale,
          dataInput.value
        )[1],
        kelvin: convertTemperature(dataInput.scale, dataInput.value)[2]
      });
    }
  };

  return (
    <div className="container-fluid">
      <Header />
      <div className="row">
        <div className="col-lg-6">
          <InputForm
            dataInput={dataInput}
            setDataInput={setDataInput}
            convert={convert}
            error={error}
          />
        </div>
        <div className="col-lg-6">
          <OutputResults dataOutput={dataOutput} error={error} />
        </div>
      </div>
    </div>
  );
}

export default CalculatorPage;
