import { User } from '../../types';
import { SUBMIT_USER_DATA } from '../actions';

const INITIAL_STATE = {
  email: '',
  password: '',
};
// Esse reducer será responsável por tratar as informações da pessoa usuária

function userReducer(state: User = INITIAL_STATE, action: any) {
  switch (action.type) {
    case SUBMIT_USER_DATA:
      return {
        ...state,
        email: action.payload.email,
        password: action.payload.password,
      };
    default:
      return state;
  }
}

export default userReducer;
