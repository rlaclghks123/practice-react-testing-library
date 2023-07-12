import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe('colorButton test', () => {
  test('renders test button', () => {
    render(<App />);
    const colorButton = screen.getByRole('button', { name: 'Change To blue' });
    expect(colorButton).toHaveStyle({ backgroundColor: 'red' });
  });

  test('button color test after click', () => {
    render(<App />);
    const colorButton = screen.getByRole('button', { name: 'Change To blue' });
    fireEvent.click(colorButton);
    expect(colorButton.style.backgroundColor).toBe('blue');
  });

  test('button content test after click', () => {
    render(<App />);
    const colorButton = screen.getByRole('button', { name: 'Change To blue' });
    fireEvent.click(colorButton);
    expect(colorButton.textContent).toBe('Change To red');
  });
});
