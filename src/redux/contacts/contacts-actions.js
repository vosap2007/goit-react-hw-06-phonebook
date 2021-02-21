import types from "./contacts-types";
import { v4 as uuidv4 } from 'uuid';

const addContacts = ({ name, number }) => ({
   type: types.ADD,
   payload: {
    id: uuidv4(),
    name,
    completed: false,
    number,
  },
});

const removeContacts = contactsId => ({
    type: types.DEL,
    payload: contactsId,
 });

 const changeFilter = filter => ({
    type: types.FILTER,
    payload: filter,
 }); 

export default {addContacts, removeContacts, changeFilter};