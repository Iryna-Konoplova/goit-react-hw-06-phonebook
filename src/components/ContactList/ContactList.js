// Модули
import React from 'react';
import { useSelector, useDispatch } from "react-redux";

// Компоненты
import ContactListItem from '../ContactListItem/ContactListItem';
import contactsAction from '../../redux/contacts/contacts-action';
import { getVisibleContacts } from '../../redux/contacts/contacts-selectors';

// Стили
import styles from '../ContactList/contactList.module.css';


const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  const onDeletContact = id => dispatch(contactsAction.deleteContact(id))

  return (
  <ul className={styles.contactList}>
    {contacts.map(({ id, name, number }) => (
      <ContactListItem
        key={id}
        id={id}
        name={name}
        number={number}
        onDeletContact={()=> onDeletContact(id)}
      />
    ))}
  </ul>
)};


export default ContactList;





// // Модули
// import React from 'react';
// import PropTypes from 'prop-types';


// // Компоненты
// import ContactListItem from '../ContactListItem/ContactListItem';


// // Стили
// import styles from '../ContactList/contactList.module.css';

// const ContactList = ({ contacts, onDeletContact }) => {
  
  
//   return (
//   <ul className={styles.contactList}>
//     {contacts.map(({ id, name, number }) => (
//       <ContactListItem
//         key={id}
//         id={id}
//         name={name}
//         number={number}
//         onDeletContact={onDeletContact}
//       />
//     ))}
//   </ul>
// )};

// ContactList.propTypes = {
//   contacts: PropTypes.array.isRequired,
//   onDeletContact: PropTypes.func.isRequired,
// };

// export default ContactList;
