import s from '../Styles.module.css';
import { useState } from 'react';
import authOperations from '../redux/auth/auth-operations';
import { useDispatch } from 'react-redux';
import { Button } from '@chakra-ui/button';

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(authOperations.logIn({ email, password }));

    setEmail('');
    setPassword('');
  };

  return (
    <div className={s.view__container}>
      <h2 className={s.home__title}>Log in form</h2>
      <form className={s.form__container} onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={email}
          placeholder="example@email.com"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={password}
          placeholder="password"
          onChange={handleChange}
        />
        {/* <button type="submit " className={s.form__btn}>
          Log in
        </button> */}
        <Button colorScheme="blue" size="lg" type="submit">
          Log in
        </Button>
      </form>
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

export default Login;
