import { createSelector } from '@reduxjs/toolkit';

const getFilter = state => state.contacts.filter;

const getVisible = state => state.contacts.items;

/*const getVisibleContacts = state => {
   const filter = getFilter (state);
   const allContacts = getVisible (state);
   const normalizedFilter = filter.toLowerCase();

   return allContacts.filter(({name}) =>
    name.toLowerCase().includes(normalizedFilter),
    );
};*/

const getVisibleContacts = createSelector(
    [getFilter, getVisible,],
    (filter, allContacts) => {
    const normalizedFilter = filter.toLowerCase();

    return allContacts.filter(({name}) =>
    name.toLowerCase().includes(normalizedFilter),
    );
    });

export default {
    getVisible,
    getFilter,
    getVisibleContacts,
};