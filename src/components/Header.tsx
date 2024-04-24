import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { GlobalStateType, State } from '../types';
import styles from '../styles/header.module.css';
import userLogo from '../icons/user.png';
import walletLogo from '../icons/wallet.png';

function Header() {
  const rootState = useSelector((state: State) => state.user);
  const rootStateAsk = useSelector((state: GlobalStateType) => state.wallet.expenses);

  useEffect(() => {}, [rootStateAsk]);

  const DespesaTotal = () => {
    const total = rootStateAsk.reduce((acc: any, curr: any) => {
      const currency = curr.exchangeRates[curr.currency].ask;
      const value = Number(curr.value) * Number(currency);
      return acc + value;
    }, 0);
    return total.toFixed(2);
  };

  return (
    <div className={ styles.headerContainer }>
      <h1>
        <img src={ walletLogo } alt="wallet Logo" />
        Wallet
      </h1>
      <p data-testid="total-field">
        {`Total de Despesas: R$:${DespesaTotal()}`}
      </p>
      <p data-testid="header-currency-field">
        Câmbio:BRL
      </p>
      <h3 data-testid="email-field">
        <img className={ styles.userLogo } src={ userLogo } alt="user Logo" />
        {' '}
        {rootState.email}
        {' '}
      </h3>
    </div>
  );
}

export default Header;
