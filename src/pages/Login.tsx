import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { submmitUserData } from '../redux/actions';
import { State } from '../types';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isEmailValid = () => {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  };
  const rootState = useSelector((state: State) => state.user.email);
  const isPasswordValid = () => password.length >= 6;

  return (
    <form
      onSubmit={ (e) => {
        e.preventDefault();
        dispatch(submmitUserData({ email, password }));
        navigate('/carteira');
      } }
    >
      <h1>Login</h1>
      <label htmlFor="email">Email: </label>
      <input
        data-testid="email-input"
        type="email"
        id="email"
        value={ email }
        onChange={ (e) => setEmail(e.target.value) }
      />
      <label htmlFor="password">Password: </label>
      <input
        data-testid="password-input"
        type="password"
        id="password"
        value={ password }
        onChange={ (e) => setPassword(e.target.value) }
      />
      <button
        disabled={ !(isEmailValid() && isPasswordValid()) }
        data-testid="login-button"
      >
        Entrar
      </button>
      <p>{rootState}</p>
    </form>
  );
}

export default Login;
