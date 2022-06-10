import React, {useState, useEffect} from "react";
import axios from "../axios";
import {Link} from "react-router-dom";

function HistoryPage() {
  const [calculations, setCalculations] = useState([]);
  useEffect(() => {
    axios.get("/calculations.json").then(response => {
      setCalculations(Object.values(response.data));
    });
  }, []);

  return (
    <div className="text-center">
      <div className="mt-3">
        <Link to="/">Click here to go back to the home page</Link>
      </div>
      {calculations.map(calculation => (
        <div className="card m-4">
          <div className="card-header">Date: {calculation.calculationDate}</div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              Celsius: {calculation.celsius}°C
            </li>
            <li className="list-group-item">
              Fahrenheit: {calculation.fahrenheit}°F
            </li>
            <li className="list-group-item">Kelvin: {calculation.kelvin}K</li>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default HistoryPage;
