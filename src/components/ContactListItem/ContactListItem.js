// Модули
import React from 'react';
import PropTypes from 'prop-types';
// import {  useDispatch } from "react-redux";

// Стили
import styles from '../ContactListItem/contactListItem.module.css';
// import contactsAction from '../../redux/contacts/contacts-action';

const ContactListItem = ({ name, number, id, onDeletContact }) => {
  // const contacts = useSelector(state => state.contacts.items);
  // const dispatch = useDispatch()

  return (
  <li className={styles.contactListItem}>
    <p className={styles.contact}>
      {' '}
      {name}: {number}
    </p>
    <button
      className={styles.buttonDelete}
      type="button"
      onClick={() => onDeletContact(id)}
    >
      Delete
    </button>
  </li>
)};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeletContact: PropTypes.func.isRequired,
};

export default ContactListItem;




// // Модули
// import React from 'react';
// import PropTypes from 'prop-types';

// // Стили
// import styles from '../ContactListItem/contactListItem.module.css';

// const ContactListItem = ({ name, number, id, onDeletContact }) => (
//   <li className={styles.contactListItem}>
//     <p className={styles.contact}>
//       {' '}
//       {name}: {number}
//     </p>
//     <button
//       className={styles.buttonDelete}
//       type="button"
//       onClick={() => onDeletContact(id)}
//     >
//       Delete
//     </button>
//   </li>
// );

// ContactListItem.propTypes = {
//   id: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   number: PropTypes.string.isRequired,
//   onDeletContact: PropTypes.func.isRequired,
// };

// export default ContactListItem;
