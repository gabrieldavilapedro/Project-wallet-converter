import { AnyAction } from 'redux';
import {
  REQUEST_API_DATA_VALORES,
  RECEIVE_API_DATA_VALORES,
  FAILED_REQUEST_API_DATA_VALORES } from '../actions';

const INITIAL_STATE = {
  currencies: [],
};

export const valoresAPIReducer: (state: any, action: AnyAction) => any = (
  state = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case REQUEST_API_DATA_VALORES:
      return {
        ...state,
      };
    case RECEIVE_API_DATA_VALORES:
      return {
        ...state,
        currencies: action.payload,
      };
    case FAILED_REQUEST_API_DATA_VALORES:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
