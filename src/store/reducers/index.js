import { combineReducers } from 'redux';

import auth from './Auth';
import user from './User';
import general from './General';
import bills from './Bill';
import giftCards from './GiftCard';
import crypto from './Crypto';

const rootReducer = combineReducers({
  auth,
  user,
  general,
  bills,
  giftCards,
  crypto,
});

export default rootReducer;
