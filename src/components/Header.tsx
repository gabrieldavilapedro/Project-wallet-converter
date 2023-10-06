import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { GlobalStateType, State } from '../types';

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
    <div>
      <h3 data-testid="email-field">
        Seu email:
        {' '}
        {rootState.email}
        {' '}
      </h3>
      <p data-testid="total-field">
        {DespesaTotal()}
      </p>
      <p data-testid="header-currency-field">
        Câmbio:BRL
      </p>
    </div>
  );
}

export default Header;
