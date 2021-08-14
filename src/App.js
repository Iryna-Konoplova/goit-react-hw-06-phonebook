// Модули
// import { useState } from "react";
// import shortid from 'shortid';
// import useLocalStorage from './hooks/useLocalStorage';
// import { useDispatch } from "react-redux";
// import contactsAction from "./redux/contacts/contacts-action";

// Компоненты
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';

// Стили
import styles from './App.module.css';


// const defaultContacts = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];


const App = () => {
  // const [contacts, setContacts] = useLocalStorage('contacts', defaultContacts);
  // const [filter, setFilter] = useState('');

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Phonebook</h1>
      <ContactForm  />
      <h2 className={styles.subtitle}>Contacts</h2>
      <Filter />  
      <ContactList />
    </div>
  );
}

export default App;
