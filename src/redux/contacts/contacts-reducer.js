import { combineReducers} from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './contacts-actions';

const items = createReducer([], {
    [actions.addContacts]: (state, action) => [...state, action.payload],
    [actions.removeContacts]: (state, action) => state.filter(contact =>contact.id !== action.payload),
});

const filter = createReducer('', {
    [actions.changeFilter]: (state, action) => action.payload,
});

export default combineReducers({
    items,
    filter,
});