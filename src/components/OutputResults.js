import {useState, useEffect} from "react";
import axios from "../axios";
import {date} from '../hooks/getDate'

function OutputResults({dataOutput, error}) {
  const [alert, setAlert] = useState({ isTrue: false, type: "", message: "" });
  const [dateTime, setDateTime] = useState()

  const submit = async e => {
    e.preventDefault();
    if (
      dataOutput.celsius !== 0 &&
      dataOutput.fahrenheit !== 0 &&
      dataOutput.kelvin !== 0
    ) {
      try {
        const res = await axios.post("/calculations.json", {
          celsius: dataOutput.celsius,
          fahrenheit: dataOutput.fahrenheit,
          kelvin: dataOutput.kelvin,
          calculationDate: date(),
        });
        setAlert({
          ...alert,
          isTrue: true,
          type: "success",
          message: "You just saved the results to the database!",
        });
      } catch (e) {
        console.log(e);
      }
    } else {
      setAlert({
        ...alert,
        isTrue: true,
        type: "warning",
        message: "First you need to enter the correct data!",
      });
    }
  };

  return (
    <>
      <div className="card my-2">
        <div className="card-header">
          Results
          <button
            onClick={submit}
            type="button"
            className="btn btn-link"
            style={{float: "right"}}
          >
            Save to database
          </button>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            Celsius: <strong>{error === "" ? dataOutput.celsius : 0}°C</strong>
          </li>
          <li className="list-group-item">
            Fahrenheit:{" "}
            <strong>{error === "" ? dataOutput.fahrenheit : 0}°F</strong>
          </li>
          <li className="list-group-item">
            Kelvin: <strong>{error === "" ? dataOutput.kelvin : 0}K</strong>
          </li>
        </ul>
      </div>
      {alert.isTrue === true && (
        <div className={`mt-2 alert alert-${alert.type}`} role="alert">
          {alert.message}
        </div>
      )}
    </>
  );
}

export default OutputResults;
