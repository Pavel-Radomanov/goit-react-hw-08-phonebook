import s from '../Styles.module.css';
// import * as s from '../Styles.module.css';
import { useState } from 'react';
import { useContacts } from './Hooks/hooks';
import { infoToast, successToast } from './Toasts';
import { Button } from '@chakra-ui/button';

export const ContacstForm = () => {
  const { contacts, addContact } = useContacts();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
    console.log(name, value);
  };

  const handleSubmit = async event => {
    event.preventDefault();

    const enterContacts = contacts.some(
      contact =>
        (contact.name === name.toLowerCase() && contact.number === number) ||
        contact.number === number
    );
    enterContacts
      ? infoToast(`${name} or ${number} is already in contacts`)
      : addContact({ name, number });
    !enterContacts && successToast('the contact is in the list  😃');
    setName('');
    setNumber('');
  };

  return (
    <div className={s.cont__container}>
      <form className={s.form__container} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          placeholder="Name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />
        <input
          type="tel"
          name="number"
          value={number}
          placeholder="phone number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="number number must be at least 5 digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
        />
        {/* <button type="submit " className={s.form__btn}>
          Add contact
        </button> */}
        <Button colorScheme="blue" size="lg" type="submit">
          Add contact
        </Button>
      </form>
    </div>
  );
};
// import { useState } from 'react';
// import { nanoid } from 'nanoid';
// import { useDispatch, useSelector } from 'react-redux';
// import { getContacts, addContact } from '../../redux/slice';

// const ContactForm = () => {
//   const [name, setName] = useState('');
//   const [number, setNumber] = useState('');
//   const contacts = useSelector(getContacts);
//   const dispatch = useDispatch();

//   const handleSubmit = event => {
//     event.preventDefault();
//     const contact = {
//       id: nanoid(),
//       name,
//       number,
//     };
//     const enterContacts = contacts.some(
//       contact => contact.name.toLowerCase() === name.toLowerCase()

//     );
//     enterContacts
//       ? alert(`${name}  is already exists`)
//       : dispatch(addContact(contact));

//     setName('');
//     setNumber('');
//   };

//   const handleChange = event => {
//     console.log(event.target.value, event.target.name);
//     const { name, value } = event.target;
//     switch (name) {
//       case 'name':
//         setName(value);
//         break;
//       case 'number':
//         setNumber(value);
//         break;
//       default:
//         break;
//     }
//   };

//   return (
//     <form
//       style={{
//         maxWidth: '250px',
//         fontSize: 30,
//       }}
//       onSubmit={handleSubmit}
//     >
//       <label>
//         Name
//         <input
//           style={{
//             height: '34px',
//             background: '#ccd6e3',
//             borderRadius: '6px',
//           }}
//           type="text"
//           onChange={handleChange}
//           name="name"
//           value={name}
//           // pattern for input
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//         />
//       </label>

//       <label>
//         Number
//         <input
//           style={{
//             height: '34px',
//             background: '#ccd6e3',
//             borderRadius: '6px',
//           }}
//           type="tel"
//           onChange={handleChange}
//           name="number"
//           value={number}
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           required
//         />
//       </label>

//       <button
//         style={{
//           boxSizing: 'border-box',
//           width: '100px',
//           height: '34px',
//           background: '#808e9e',
//           border: 'none',
//           cursor: 'pointer',
//           borderRadius: '6px',
//           marginTop: '20px',
//         }}
//         type="submit"
//       >
//         Add contact
//       </button>
//     </form>
//   );
// };

// export default ContactForm;
