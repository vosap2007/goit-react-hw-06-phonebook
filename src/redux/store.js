import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import ContactsReducer from "./contacts/contacts-reducer";

const middleware = [logger]

const contactsPersistConfig = {
    key: 'contacts',
    storage,
    blacklist: ['filter'],
  };

const store = configureStore({ 
    reducer: {
        contacts: persistReducer(contactsPersistConfig, ContactsReducer), 
    },
    middleware: middleware, 
    devTools: process.env.NODE_ENV === 'development', });

const persistor = persistStore(store);

export default { store, persistor };