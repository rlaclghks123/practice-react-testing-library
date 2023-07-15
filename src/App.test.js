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
    expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });
  });

  test('button content test after click', () => {
    render(<App />);
    const colorButton = screen.getByRole('button', { name: 'Change To blue' });
    fireEvent.click(colorButton);
    expect(colorButton).toHaveTextContent('Change To red');
  });
});

describe('colorButton with checkbox test', () => {
  test('initial checkbox status is not chekced test', () => {
    render(<App />);
    const checkbox = screen.getByRole('checkbox', { name: 'Disable Button' });
    expect(checkbox).not.toBeChecked();
  });

  test('initial button status test', () => {
    render(<App />);
    const colorButton = screen.getByRole('button', { name: 'Change To blue' });
    expect(colorButton).toBeEnabled();
  });

  test('button to be disable if checkbox is checked test', () => {
    render(<App />);
    const colorButton = screen.getByRole('button', { name: 'Change To blue' });
    const checkbox = screen.getByRole('checkbox', { name: 'Disable Button' });
    fireEvent.click(checkbox);
    expect(colorButton).toBeDisabled();
  });

  test('button to be able if checkbox is double cliked test', () => {
    render(<App />);
    const colorButton = screen.getByRole('button', { name: 'Change To blue' });
    const checkbox = screen.getByRole('checkbox', { name: 'Disable Button' });
    fireEvent.click(checkbox);
    fireEvent.click(checkbox);
    expect(colorButton).toBeEnabled();
  });

  test('button backgroundColor is  gray if checkbox is cliked test', () => {
    render(<App />);
    const colorButton = screen.getByRole('button', { name: 'Change To blue' });
    const checkbox = screen.getByRole('checkbox', { name: 'Disable Button' });
    fireEvent.click(checkbox);
    expect(colorButton).toHaveStyle({ backgroundColor: 'gray' });

    fireEvent.click(checkbox);
    expect(colorButton).toHaveStyle({ backgroundColor: 'red' });

    fireEvent.click(colorButton);
    expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });
  });
});
