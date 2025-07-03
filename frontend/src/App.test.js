import { render, screen } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('renders LearnQE heading', () => {
  render(<App />);
  const heading = screen.getByText(/LearnQE/i);
  expect(heading).toBeInTheDocument();
});

