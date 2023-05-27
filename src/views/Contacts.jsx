import { ContacstForm } from '../components/ContactForm';
import { Filter } from '../components/Finder';
import { ContactsList } from '../components/ContactList';
import s from '../Styles.module.css';

const Contacts = () => {
  return (
    <div className={s.view__container}>
      <h2 className={s.home__title}>
        Enter a name and phone number to add a contact
      </h2>
      <ContacstForm />
      <Filter />
      <ContactsList />
      <p className={s.pixabay}>
        <div>Image by</div>
        <a href="https://pixabay.com/users/jarmoluk-143740/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=264776">
          Michal Jarmoluk
        </a>
        <div>from </div>
        <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=264776">
          Pixabay
        </a>
      </p>
    </div>
  );
};

export default Contacts;
