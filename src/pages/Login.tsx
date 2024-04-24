import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { submmitUserData } from '../redux/actions';
import styles from '../styles/login.module.css';
import walletLogo from '../icons/wallet.png';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isEmailValid = () => {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  };
  const isPasswordValid = () => password.length >= 6;

  return (
    <div className={ styles.loginContainer }>
      <form
        onSubmit={ (e) => {
          e.preventDefault();
          dispatch(submmitUserData({ email, password }));
          navigate('/carteira');
        } }
      >
        <div>
          <img src={ walletLogo } alt="wallet Logo" />
          <h1>
            Wallet
          </h1>
        </div>
        <input
          placeholder="Email"
          data-testid="email-input"
          type="email"
          id="email"
          value={ email }
          onChange={ (e) => setEmail(e.target.value) }
        />
        <input
          placeholder="Password"
          data-testid="password-input"
          type="password"
          id="password"
          value={ password }
          onChange={ (e) => setPassword(e.target.value) }
        />
        <button
          disabled={ !(isEmailValid() && isPasswordValid()) }
          data-testid="login-submit-btn"
        >
          Entrar
        </button>
      </form>
    </div>
  );
}

export default Login;
