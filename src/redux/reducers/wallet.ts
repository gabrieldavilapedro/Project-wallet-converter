// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { AnyAction } from 'redux';
import { REQUEST_API_DATA, FAILED_REQUEST_API_DATA, RECEIVE_API_DATA } from '../actions';
import { WalletType } from '../../types';

const INITIAL_STATE: WalletType = {
  currencies: [],
  isFetching: false,
  error: '',
};

export const walletReducer: (state: WalletType, action: AnyAction) => WalletType = (
  state = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case REQUEST_API_DATA:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_API_DATA:
      return {
        ...state,
        currencies: action.payload,
        isFetching: false,
      };
    case FAILED_REQUEST_API_DATA:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };
    default:
      return state;
  }
};
