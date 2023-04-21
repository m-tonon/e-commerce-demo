import { FireUser } from '../../models/user.model';
import * as userActions from './user.actions';

export type Action = userActions.All;

const defaultUser = new FireUser(null , 'GUEST');

// Reducer function
export function userReducer(state: FireUser = defaultUser, action: Action) {
  switch (action.type) {
    case userActions.GET_USER:
      return {...state,loading: true};

    case userActions.AUTHENTICATED:
      return  {...state, ...action.payload, loading: false};

    case userActions.NOT_AUTHENTICATED:
      return {...state, ...defaultUser, loading: false};

    case userActions.AUTH_ERROR:
      return {...state, ...action.payload, loading: false};

    case userActions.GOOGLE_LOGIN:
      return {...state, loading: true};

    case userActions.LOGOUT:
      return {...state, loading: true};

  }
}
