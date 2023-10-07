import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

export type User = {
  email: string;
  password: string;
};

export type WalletType = {
  currencies: Array<string>,
  expenses: any,
  isFetching: boolean,
  error: string,
};

export type State = {
  user: User;
  wallet: WalletType;
};

export type ExpenseType = {
  id: number;
  value: string;
  description: string;
  currency: string;
  method: string;
  tag: string;
  exchangeRates: {
    [key: string]: {
      name: string;
      ask: string;
      bid: string;
      code: string;
      codein: string;
      create_date: string;
      high: string;
      low: string;
      pctChange: string;
      timestamp: string;
    };
  };
};

export type GlobalStateType = {
  user: User;
  wallet: WalletType;
  valoresAPI: WalletType;
};

export type WalletFormeDispatch = ThunkDispatch<GlobalStateType, unknown, AnyAction>;
