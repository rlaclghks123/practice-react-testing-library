import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SummaryForm from '../SummaryForm';
import userEvent from '@testing-library/user-event';

describe('SummaryForm Test', () => {
  test('checkbox and button initial status Test', () => {
    render(<SummaryForm />);
    const button = screen.getByRole('button', { name: 'Confirm order' });
    const checkbox = screen.getByRole('checkbox', { name: 'I agree to Terms and Conditions' });
    expect(button).toBeDisabled();
    expect(checkbox).not.toBeChecked();
  });

  test('button is disabled if checkbox is checked Test', async () => {
    render(<SummaryForm />);
    const user = userEvent.setup();
    const button = screen.getByRole('button', { name: 'Confirm order' });
    const checkbox = screen.getByRole('checkbox', { name: 'I agree to Terms and Conditions' });
    await user.click(checkbox);
    expect(button).toBeEnabled();

    await user.click(checkbox);
    expect(button).toBeDisabled();
  });

  test('popover responds to hover', async () => {
    const user = userEvent.setup();

    // popover starts out hidden

    // popover appears on mouseover of checkbox label

    // popover disappears when we mouse out
  });
});
