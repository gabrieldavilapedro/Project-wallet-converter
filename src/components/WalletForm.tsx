import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { GlobalStateType, WalletFormeDispatch } from '../types';
import { fetchApiData } from '../redux/actions';

function WalletForm() {
  const rootState = useSelector((state: GlobalStateType) => state.wallet);
  const dispatch: WalletFormeDispatch = useDispatch();

  // const currencies = Object
  //   .keys(rootState.currencies)
  //   .filter((currency) => currency !== 'USDT');

  const currencies = rootState.currencies
    .filter((currency) => currency !== 'USDT');

  useEffect(() => {
    dispatch(fetchApiData());
  }, [dispatch]);

  return (
    <div>
      <form>
        <label htmlFor="despesa">valor da despesa: </label>
        <input id="despesa" data-testid="value-input" type="number" />
        <label htmlFor="descricao">Descrição: </label>
        <input id="descricao" data-testid="description-input" type="text" />

        <label htmlFor="moeda">Moeda: </label>
        <select id="moeda" data-testid="currency-input">
          {currencies.map((currency) => (
            <option
              key={ currency }
              value={ currency }
            >
              { currency }

            </option>
          ))}
        </select>

        <label htmlFor="pagamento">método de pagamento: </label>
        <select id="pagamento" data-testid="method-input">
          <option value="dinheiro">Dinheiro</option>
          <option value="cartao de credito">Cartão de crédito</option>
          <option value="cartao de debito">Cartão de débito</option>
        </select>
        <label htmlFor="tag">tag: </label>
        <select id="tag" data-testid="tag-input">
          <option value="alimentacao">Alimentação</option>
          <option value="lazer">Lazer</option>
          <option value="trabalho">Trabalho</option>
          <option value="transporte">Transporte</option>
          <option value="saude">Saúde</option>
        </select>
      </form>
    </div>
  );
}

export default WalletForm;
