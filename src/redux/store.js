import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import contactsReducers from './contacts/contacts-reduser';

const rootReducer = combineReducers({
  contacts: contactsReducers,
});

// const initialState = {
//   contacts: {
//     items: [],
//     filter: ''
//   }
// }

// const reducer = (state = initialState, action) => state;



const store = createStore(rootReducer, composeWithDevTools());

export default store;





