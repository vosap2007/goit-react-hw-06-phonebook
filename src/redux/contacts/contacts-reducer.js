import { combineReducers} from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
    addContactRequest,
    addContactSuccess,
    addContactError,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError,
    fetchContactRequest,
    fetchContactSuccess,
    fetchContactError,
    changeFilter,
} from './contacts-actions';

const items = createReducer([], {
    [fetchContactSuccess]: (state, action) => action.payload,
    [addContactSuccess]: (state, action) => [...state, action.payload],
    [deleteContactSuccess]: (state, action) => state.filter(contact =>contact.id !== action.payload),
});

const loading = createReducer(false, {
    [fetchContactRequest]: () => true,
    [fetchContactSuccess]: () => false,
    [fetchContactError]: () => false,
    [addContactRequest]: () => true,
    [addContactSuccess]: () => false,
    [addContactError]: () => false,
    [deleteContactRequest]: () => true,
    [deleteContactSuccess]: () => false,
    [deleteContactError]: () => false,
});

const filter = createReducer('', {
    [changeFilter]: (state, action) => action.payload,
});

export default combineReducers({
    items,
    filter,
    loading,
});