import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import authOperations from '../redux/auth/auth-operations';
import authSelectors from '../redux/auth/auth-selectors';
import { ChakraProvider } from '@chakra-ui/react';

import PrivateRoute from './Routs/PrivateRoute';
import PublicRoute from './Routs/PublicRoute';

import { Layout } from './Layout';

const HomeView = lazy(() => import('../views/Home'));
const Register = lazy(() => import('../views/Register'));
const Login = lazy(() => import('../views/Login'));
const Contacts = lazy(() => import('../views/Contacts'));
const NotFound = lazy(() => import('../views/NotFound'));

export const App = () => {
  const dispatch = useDispatch();

  const isFetchingCurrentUser = useSelector(
    authSelectors.getIsFetchingCurrentUser
  );

  console.log(isFetchingCurrentUser);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <>
        <ChakraProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route
                index
                element={
                  <PublicRoute>
                    <HomeView />
                  </PublicRoute>
                }
              />

              <Route
                path="/register"
                element={
                  <PublicRoute restricted>
                    <Register />
                  </PublicRoute>
                }
              />

              <Route
                path="/login"
                element={
                  <PublicRoute restricted>
                    <Login />
                  </PublicRoute>
                }
              />

              <Route
                path="/contacts"
                element={
                  <PrivateRoute>
                    <Contacts />
                  </PrivateRoute>
                }
              />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
          <ToastContainer />
        </ChakraProvider>
      </>
    )
  );
};

// ______________________________________________________

// import ContactForm from './ContactForm/ContactForm';
// import ContactList from './ContactList/ContactList';

// import Finder from './Finder/Finder';

// const mainStyle = {

//   display: 'flex',
//   flexDirection: 'column',
//   justifyContent: 'center',
//   alignItems: 'left',
//   fontSize: 20,
//   color: '#3d2f26ed',
//   marginLeft: '30px',
// };

// const App = () => {
//   return (
//     <section style={mainStyle}>
//       <h1>Phonebook</h1>
//       <ContactForm />

//       <h2>Contacts</h2>
//       <Finder />
//       <ContactList />
//     </section>
//   );
// };
// export default App;
