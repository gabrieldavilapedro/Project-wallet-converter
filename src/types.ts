import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

export type User = {
  email: string;
  password: string;
};

export type WalletType = {
  currencies: Array<string>,
  isFetching: boolean,
  error: string,
};
export type State = {
  user: User;
  wallet: WalletType;
};

export type GlobalStateType = {
  user: User;
  wallet: WalletType;
};

export type WalletFormeDispatch = ThunkDispatch<GlobalStateType, unknown, AnyAction>;
