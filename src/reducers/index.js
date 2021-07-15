import { combineReducers } from 'redux';
import Auth from '../reducers/Auth';

export default combineReducers({
    auth: Auth,
});