import { v4 as uuidv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';

const addContacts =createAction('contacts/ADD', ({ name, number }) => {
   return {
      payload: {
         id: uuidv4(),
         name,
         completed: false,
         number,
       }
   }
});

const removeContacts = createAction('contacts/DEL');

 const changeFilter = createAction('contacts/FILTER');

export default {addContacts, removeContacts, changeFilter};