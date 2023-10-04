import { useSelector } from 'react-redux';
import { useState } from 'react';
import { State } from '../types';

function Header() {
  const [despesa, setDespesa] = useState<number>(0);
  const rootState = useSelector((state: State) => state.user);
  return (
    <div>
      <h3 data-testid="email-field">
        Seu email:
        {' '}
        {rootState.email}
        {' '}
      </h3>
      <p data-testid="total-field">
        Despesa total:
        {' '}
        {despesa}
      </p>
      <p data-testid="header-currency-field">
        Câmbio:BRL
      </p>
    </div>
  );
}

export default Header;
