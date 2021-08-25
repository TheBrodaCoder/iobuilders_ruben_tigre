import { createStore, combineReducers } from 'redux';
import userSlice from '../reducers/userSlice';
import walletSlice from '../reducers/walletSlice';
import loggedSlice from '../reducers/loggedSlice';

const reducer = combineReducers({
    users: userSlice,
    wallets: walletSlice,
    logged: loggedSlice
});

const store = createStore(reducer);

export default store;