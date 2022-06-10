function InputForm({dataInput, setDataInput, convert, error}) {
  return (
    <>
      <div className="my-2">
        <select
          className="form-select form-select-sm"
          id="inputGroupSelect04"
          aria-label="Example select with button addon"
          onChange={e => setDataInput({...dataInput, scale: e.target.value})}
        >
          <option selected disabled value="">
            Convert from:
          </option>
          <option value="stC">Celsius scale (°C)</option>
          <option value="stF">Fahrenheit scale (°F)</option>
          <option value="stK">Kelvin scale (K)</option>
        </select>
      </div>
      <div className="input-group">
        <input
          className="form-control "
          onChange={e => setDataInput({...dataInput, value: e.target.value})}
          value={dataInput.value}
        ></input>
        <div className="input-group-append">
          <button className="btn btn-primary" type="button" onClick={convert}>
            convert
          </button>
        </div>
      </div>
      {error !== "" && (
        <div className=" mt-2 alert alert-danger" role="alert">
          {error}
        </div>
      )}
    </>
  );
}

export default InputForm;
