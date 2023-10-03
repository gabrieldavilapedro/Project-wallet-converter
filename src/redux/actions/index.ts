// Coloque aqui suas actions

import { User } from '../../types';

export const SUBMIT_USER_DATA = 'SUBMIT_USER_DATA';

export const submmitUserData = (user: User) => ({
  type: SUBMIT_USER_DATA,
  payload: user,
});
