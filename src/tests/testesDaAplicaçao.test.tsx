import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import App from '../App';

const inputEmailId = 'email-input';
const inputPasswordId = 'password-input';
const loginButão = 'login-submit-btn';

describe('testes da aplicaçao', () => {
  describe('Teste para os elementos da rota inicial', () => {
    test('verifica se existe certos elementos', () => {
      renderWithRouterAndRedux(<App />);
      const email = screen.getByTestId('email-input');
      const total = screen.getByTestId('password-input');
      const button = screen.getByTestId('login-submit-btn');

      expect(email).toBeInTheDocument();
      expect(total).toBeInTheDocument();
      expect(button).toBeInTheDocument();
    });
    test('verifica se o botao continua desabilitado', async () => {
      renderWithRouterAndRedux(<App />);
      const user = userEvent.setup();
      const emailValido = 'Gabriel@gmail.com';
      const senhavalida = '666666';
      const emailInvalido = 'gabriel.gmail.com';
      const senhaInvalida = '12345';

      const email = screen.getByTestId(inputEmailId);
      const senha = screen.getByTestId(inputPasswordId);
      const button = screen.getByRole('button');

      await user.type(email, emailInvalido);
      await user.type(senha, senhaInvalida);

      await user.clear(email);
      await user.clear(senha);

      await user.type(email, emailValido);
      await user.type(senha, senhavalida);
      expect(button).toBeEnabled();

      await user.clear(email);
      await user.clear(senha);

      await user.type(email, emailInvalido);
      await user.type(senha, senhavalida);

      expect(button).toBeDisabled();

      await user.clear(email);
      await user.clear(senha);

      await user.type(email, emailValido);
      await user.type(senha, senhaInvalida);

      expect(button).toBeDisabled();
    });
  });
});
