import axios from "axios";

const instance = axios.create({
  baseURL: "https://temperature-calculator-a56c9-default-rtdb.firebaseio.com",
});

export default instance;
