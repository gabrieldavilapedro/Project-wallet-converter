import { useSelector, useDispatch } from 'react-redux';
import { ExpenseType, GlobalStateType } from '../types';
import { deleteExpense } from '../redux/actions';
// import { deleteExpense } from '../actions';

function Table() {
  const rootState = useSelector((state: GlobalStateType) => state.wallet.expenses);
  const dispatch = useDispatch();
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
          {rootState.map((expense: ExpenseType) => (
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
              <td>
                <button
                  data-testid="delete-btn"
                  type="button"
                  onClick={ () => dispatch(deleteExpense(expense.id)) }
                >
                  Deletar

                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
