import s from '../Styles.module.css';
import { Loader } from '../components/Loader/Loader';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useContacts } from './Hooks/hooks';
import { contactsOperations } from '../redux/contacts/contactsOperations';
import { deleteToast } from './Toasts';
import { useSelector } from 'react-redux';
import authSelectors from '../redux/auth/auth-selectors';
import { Button } from '@chakra-ui/button';

export const ContactsList = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  const dispatch = useDispatch();
  const { contacts, isLoaging, filter, deleteContact, setFilter } =
    useContacts();

  useEffect(() => {
    dispatch(contactsOperations.getContacts());
  }, [dispatch]);

  const findContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    if (contacts) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      );
    }
  };

  const filteredContacts = findContacts();

  return (
    <div>
      {isLoaging && <Loader />}
      {isLoggedIn && (
        <ul className={s.items__container}>
          {contacts &&
            filteredContacts.map(({ id, name, number }) => {
              return (
                <li className={s.item} key={id}>
                  <h3 className={s.item__name}>{name}:</h3>
                  <p className={s.item__name}>{number}</p>
                  {/* <button
                    className={s.user__btn}
                    type="button"
                    onClick={() => {
                      deleteContact(id);
                      deleteToast(`${name} tel:${number} is deleted`);
                      setFilter('');
                    }}
                  >
                    Delete
                  </button> */}
                  <Button
                    colorScheme="red"
                    size="md"
                    type="button"
                    onClick={() => {
                      deleteContact(id);
                      deleteToast(`${name} tel:${number} is deleted`);
                      setFilter('');
                    }}
                  >
                    Delete
                  </Button>
                </li>
              );
            })}
        </ul>
      )}
    </div>
  );
};

// import { useDispatch, useSelector } from 'react-redux';
// import { getContacts, getFilter, deleteContact } from '../../redux/slice';

// const ContactList = () => {
//   const dispatch = useDispatch();
//   const contacts = useSelector(getContacts);
//   const filter = useSelector(getFilter);

//   const findContacts = () => {
//     const normalizedFilter = filter.toLowerCase();
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//   };

//   const filteredContacts = findContacts();

//   return (
//     <ul>
//       {filteredContacts.map(({ id, name, number }) => {
//         console.log(name);
//         return (
//           <li key={id}>
//             <p>
//               {name}: {number}
//             </p>
//             <button
//               style={{
//                 boxSizing: 'border-box',
//                 width: '100px',
//                 height: '34px',
//                 background: '#808e9e',
//                 border: 'none',
//                 cursor: 'pointer',
//                 borderRadius: '6px',
//                 marginTop: '20px',
//               }}
//               type="button"
//               onClick={() => dispatch(deleteContact(id))}
//             >
//               Delete
//             </button>
//           </li>
//         );
//       })}
//     </ul>
//   );
// };

// export default ContactList;
