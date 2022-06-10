import { render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import CalculatorPage from '../pages/CalculatorPage';
import HistoryPage from '../pages/HistoryPage'

test('Render the correct component - CalculatorPage', () => {
  render(
      <BrowserRouter>
        <CalculatorPage />
      </BrowserRouter>
    );
  const text = screen.getByText(/Temperature conversion calculator/);
  expect(text).toBeInTheDocument();
});

test('Render the correct component - HistoryPage', () => {
  render(
      <BrowserRouter>
        <HistoryPage />
      </BrowserRouter>
    );
  const text = screen.getByText(/Click here to go back to the home page/);
  expect(text).toBeInTheDocument();
});