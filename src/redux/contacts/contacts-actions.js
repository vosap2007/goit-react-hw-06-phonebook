import { v4 as uuidv4 } from 'uuid';
import axios from "axios";
import { createAction } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://localhost:4040';

const addContacts = ({ name, number }) => dispatch => {
   axios.get
}

const addContacts = createAction('contacts/ADD', ({ name, number }) => {
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