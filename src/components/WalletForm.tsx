import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { GlobalStateType, WalletFormeDispatch } from '../types';
import { addExpense, fetchApiDataValores } from '../redux/actions';
import styles from '../styles/walletForm.module.css';

function WalletForm() {
  const [id, setId] = useState<number>(0);
  const [value, setValue] = useState<string>('');
  const [description, setDescription] = useState<string>('Sem descrição');
  const [currency, setCurrency] = useState<string>('USD');
  const [method, setMethod] = useState<string>('Dinheiro');
  const [tag, setTag] = useState<string>('Alimentacao');

  const rootState = useSelector((state: GlobalStateType) => state.wallet);

  const rootStateValoresApi = useSelector((state: GlobalStateType) => state.valoresAPI);

  const dispatch: WalletFormeDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchApiDataValores());
  }, [dispatch]);

  return (
    <div className={ styles.formContainer }>
      <form
        onSubmit={ (e) => {
          e.preventDefault();
          setId(id + 1);
          setValue('');
          setDescription('Sem descrição');
          setCurrency('USD');
          setMethod('Dinheiro');
          setTag('Alimentacao');
        } }
      >
        <label htmlFor="despesa">Valor da despesa </label>
        <input
          id="despesa"
          data-testid="value-input"
          type="number"
          value={ value }
          onChange={ (e) => setValue(e.target.value) }
        />

        <label htmlFor="descricao">Descrição </label>
        <input
          id="descricao"
          data-testid="description-input"
          type="text"
          value={ description }
          onChange={ (e) => setDescription(e.target.value) }
        />

        <label htmlFor="moeda">Moeda </label>
        <select
          id="moeda"
          data-testid="currency-input"
          value={ currency }
          onChange={ (e) => setCurrency(e.target.value) }
        >
          {rootState.currencies.map((code) => (
            <option
              key={ code }
              value={ code }
            >
              { code }

            </option>
          ))}
        </select>

        <label htmlFor="pagamento">Método de pagamento </label>
        <select
          id="pagamento"
          data-testid="method-input"
          value={ method }
          onChange={ (e) => setMethod(e.target.value) }
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>

        <label htmlFor="tag">Tag </label>
        <select
          id="tag"
          data-testid="tag-input"
          value={ tag }
          onChange={ (e) => setTag(e.target.value) }
        >
          <option value="Alimentacao">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saude">Saúde</option>
        </select>
        <div>
          <button
            data-testid="btn-add"
            onClick={ async (): Promise<void> => {
              await dispatch(fetchApiDataValores());
              await dispatch(addExpense({
                id,
                value,
                description,
                currency,
                method,
                tag,
                exchangeRates: rootStateValoresApi.currencies }));
            } }
          >
            Adicionar despesa

          </button>
        </div>
      </form>
    </div>
  );
}

export default WalletForm;
