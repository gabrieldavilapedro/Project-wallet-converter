import { useSelector } from 'react-redux';
import { Expense, GlobalStateType } from '../types';

function Table() {
  const rootState = useSelector((state: GlobalStateType) => state.wallet.expenses);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {rootState.map((expense: Expense) => (
            <tr key={ expense.id }>
              <td>{expense.description}</td>
              <td>{expense.tag}</td>
              <td>{expense.method}</td>
              <td>{Number(expense.value).toFixed(2)}</td>
              <td>{expense.exchangeRates[expense.currency].name}</td>
              <td>{Number(expense.exchangeRates[expense.currency].ask).toFixed(2)}</td>
              <td>
                {(Number(expense.exchangeRates[expense.currency].ask)
                 * Number(expense.value)).toFixed(2)}
              </td>
              <td>Real</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
