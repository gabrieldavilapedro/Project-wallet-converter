// Coloque aqui suas actions

import { Dispatch } from 'redux';
import { User } from '../../types';
import { getCurrencyValores } from '../../services/chamaAP1';

export const SUBMIT_USER_DATA = 'SUBMIT_USER_DATA';

export const ADD_EXPENSE = 'ADD_EXPENSE';

export const REQUEST_API_DATA = 'REQUEST_API_DATA';
export const RECEIVE_API_DATA = 'RECEIVE_API_DATA';
export const FAILED_REQUEST_API_DATA = 'FAILED_REQUEST_API_DATA';

export const REQUEST_API_DATA_VALORES = 'REQUEST_API_DATA_VALORES';
export const RECEIVE_API_DATA_VALORES = 'RECEIVE_API_DATA_VALORES';
export const FAILED_REQUEST_API_DATA_VALORES = 'FAILED_REQUEST_API_DATA_VALORES';

export const DELETE_EXPENSE = 'DELETE_EXPENSE';

export const submmitUserData = (user: User) => ({
  type: SUBMIT_USER_DATA,
  payload: user,
});

export const addExpense = (expenses: any) => ({
  type: ADD_EXPENSE,
  payload: expenses,
});

export const deleteExpense = (id: number) => ({
  type: DELETE_EXPENSE,
  payload: id,
});

const requestApiDataValores = () => ({
  type: REQUEST_API_DATA_VALORES,
});

const receiveApiDataValores = (currencies: Array<string>) => ({
  type: RECEIVE_API_DATA_VALORES,
  payload: currencies,
});

const failedRequestApiDataValores = (error: unknown) => ({
  type: FAILED_REQUEST_API_DATA_VALORES,
  payload: error,
});

const receiveApiData = (currencies: Array<string>) => ({
  type: RECEIVE_API_DATA,
  payload: currencies,
});

export function fetchApiDataValores() {
  return async (dispatch: Dispatch) => {
    dispatch(requestApiDataValores());
    try {
      const moedas = await getCurrencyValores();
      const moedasValores = Object.entries(moedas)
        .filter((currency) => currency[0] !== 'USDT')
        .map((currency: any) => currency[1].code);
      dispatch(receiveApiDataValores(moedas));
      dispatch(receiveApiData(moedasValores));
    } catch (error) {
      console.log(error);
      dispatch(failedRequestApiDataValores(error));
    }
  };
}
