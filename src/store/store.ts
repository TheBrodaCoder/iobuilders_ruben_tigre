import { createStore, combineReducers } from 'redux';
import userSlice from '../reducers/userSlice';
import walletSlice from '../reducers/walletSlice';
import loggedSlice from '../reducers/loggedSlice';

const reducer = combineReducers({
    usersList: userSlice,
    walletsList: walletSlice,
    loggedState: loggedSlice
});

const store = createStore(reducer);

export default store;