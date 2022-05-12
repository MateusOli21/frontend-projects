import userEvent from '@testing-library/user-event';
import { render, screen } from '@app/tests/lib/render';
import { ContactForm } from '.';

describe('ContactForm Component', () => {
  it('should submit format', async () => {
    const { getByTestId, getByRole } = render(<ContactForm />);

    const inputName = getByTestId('inputName');
    const inputEmail = getByTestId('inputEmail');
    const inputPhone = getByTestId('inputPhone');

    const submitButton = getByRole('button', { name: 'Cadastrar' });

    userEvent.type(inputName, 'Mateus');
    userEvent.type(inputEmail, 'mateus@gmail.com');
    userEvent.type(inputPhone, '11999999999');

    userEvent.click(submitButton);

    expect(screen.queryByText('Cadastrar')).toBeTruthy();
  });
});
