import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import SummaryForm from '../SummaryForm';
import userEvent from '@testing-library/user-event';

describe('SummaryForm Test', () => {
  test('checkbox and button initial status Test', () => {
    render(<SummaryForm />);
    const button = screen.getByRole('button', { name: 'Confirm order' });
    const checkbox = screen.getByRole('checkbox', { name: 'Terms and Conditions' });
    expect(button).toBeDisabled();
    expect(checkbox).not.toBeChecked();
  });

  test('button is disabled if checkbox is checked Test', async () => {
    render(<SummaryForm />);
    const user = userEvent.setup();
    const button = screen.getByRole('button', { name: 'Confirm order' });
    const checkbox = screen.getByRole('checkbox', { name: 'Terms and Conditions' });
    await user.click(checkbox);
    expect(button).toBeEnabled();

    await user.click(checkbox);
    expect(button).toBeDisabled();
  });

  test('popover responds to hover', async () => {
    render(<SummaryForm />);
    const user = userEvent.setup();

    // popover starts out hidden
    const nullPopover = screen.queryByText(/no ice cream will actually be delivered/i);
    expect(nullPopover).not.toBeInTheDocument();

    // // popover appears on mouseover of checkbox label
    const termsAndConditions = screen.getByText(/terms and conditions/i);
    await user.hover(termsAndConditions);
    const popover = screen.getByText(/no ice cream will actually be delivered/i);
    expect(popover).toBeInTheDocument();

    // popover disappears when we mouse out
    await user.unhover(termsAndConditions);
    expect(nullPopover).not.toBeInTheDocument();
  });
});
