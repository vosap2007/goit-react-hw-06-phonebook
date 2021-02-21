import { createStore, combineReducers} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ContactsReducer from "./contacts/contacts-reducer";

const rootReducer = combineReducers({
    contacts: ContactsReducer, 
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;