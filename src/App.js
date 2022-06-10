import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import CalculatorPage from "./pages/CalculatorPage";
import HistoryPage from "./pages/HistoryPage";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CalculatorPage />} />
        <Route path="/history" element={<HistoryPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
