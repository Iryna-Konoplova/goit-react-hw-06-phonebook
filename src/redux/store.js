import { configureStore } from '@reduxjs/toolkit';
import contactsReducers from './contacts/contacts-reduser';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const persistConfig = {
//   key: 'hello',
//   storage,
// }

const store = configureStore({
  reducer: {
    contacts: contactsReducers,
  },
  devTools: process.env.NODE_ENV === 'development',
});


export default store;




// // Redux

// import { createStore, combineReducers } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import contactsReducers from './contacts/contacts-reduser';

// const rootReducer = combineReducers({
//   contacts: contactsReducers,
// });


// const store = createStore(rootReducer, composeWithDevTools());

// export default store;










// const initialState = {
//   contacts: {
//     items: [],
//     filter: ''
//   }
// }











