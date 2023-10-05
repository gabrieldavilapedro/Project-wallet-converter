// Coloque aqui suas actions

import { AnyAction, Dispatch } from 'redux';
import { User } from '../../types';
import { getCurrencyEconomia } from '../../services/chamaAP1';

export const SUBMIT_USER_DATA = 'SUBMIT_USER_DATA';

export const REQUEST_API_DATA = 'REQUEST_API_DATA';
export const RECEIVE_API_DATA = 'RECEIVE_API_DATA';
export const FAILED_REQUEST_API_DATA = 'FAILED_REQUEST_API_DATA';

export const submmitUserData = (user: User) => ({
  type: SUBMIT_USER_DATA,
  payload: user,
});

const requestApiData = () => ({
  type: REQUEST_API_DATA,
});

const receiveApiData = (currencies: AnyAction) => ({
  type: RECEIVE_API_DATA,
  payload: currencies,
});

const failedRequestApiData = (error: unknown) => ({
  type: FAILED_REQUEST_API_DATA,
  payload: error,
});

export function fetchApiData() {
  return async (dispatch: Dispatch) => {
    dispatch(requestApiData());
    try {
      const moedas = await getCurrencyEconomia();
      dispatch(receiveApiData(moedas));
    } catch (error) {
      console.log(error);
      dispatch(failedRequestApiData(error));
    }
  };
}
