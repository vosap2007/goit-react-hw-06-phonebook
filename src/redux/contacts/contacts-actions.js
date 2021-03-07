//import { v4 as uuidv4 } from 'uuid';
//import axios from "axios";
import { createAction } from '@reduxjs/toolkit';

export const fetchContactRequest = createAction('contacts/fetchContactRequest');
export const fetchContactSuccess = createAction('contacts/fetchContactSuccess');
export const fetchContactError = createAction('contacts/fetchContactError');

export const addContactRequest = createAction('contacts/addContactRequest');
export const addContactSuccess = createAction('contacts/addContactSuccess');
export const addContactError = createAction('contacts/addContactError');

export const deleteContactRequest = createAction('contacts/deleteContactRequest');
export const deleteContactSuccess = createAction('contacts/deleteContactSuccess');
export const deleteContactError = createAction('contacts/deleteContactError');

//axios.defaults.baseURL = 'http://localhost:4040';

/*const addContacts = ({ name, number }) => dispatch => {
   const contact = { 
      name, 
      number, 
      completed: false,
   };

   dispatch({type: 'contacts/addContactRequest'});
    
   axios
   .post("/contacts", contact)
   .then(({data}) => 
          dispatch({type: 'contacts/addContactSuccess', payload: data}),
   )
   .catch(error => dispatch({type: 'contacts/addContactError', payload: error}));
 };*/

/*const addContacts = createAction('contacts/ADD', ({ name, number }) => {
   return {
      payload: {
         id: uuidv4(),
         name,
         completed: false,
         number,
      }
   }
});*/

//export const removeContacts = createAction('contacts/DEL');

export const changeFilter = createAction('contacts/FILTER');

/* default { 
   addContactRequest,
   addContactSuccess,
   addContactError,
   addContacts,
   removeContacts, 
   changeFilter };*/