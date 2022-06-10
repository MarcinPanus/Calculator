import React from "react";
import {Link} from "react-router-dom";

function Header() {
  return (
    <div className="p-4 text-center bg-light">
      <h1 className="mb-3">Temperature conversion calculator</h1>
      <p className="mb-3">
        1. Select a temperature scale from the drop-down list.
      </p>
      <p>2. Enter the value you want to convert.</p>
      <p>3. Press the "convert" button to see the results.</p>
      <p>4. You can save the results to the database by clicking "Save to database" and view the history with the link below:</p>
      <Link to="/history">
        Click here to see the history of all calculations you saved
      </Link>
    </div>
  );
}

export default Header;
