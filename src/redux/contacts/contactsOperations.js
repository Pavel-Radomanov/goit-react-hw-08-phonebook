import { createAsyncThunk } from '@reduxjs/toolkit';
// import { deleteToast } from '../../components/Toasts';
import axios from 'axios';

const getContacts = createAsyncThunk('contacts/fetchContacts', async () => {
  try {
    const { data } = await axios.get('/contacts');
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
});

const addContact = createAsyncThunk('contacts/add', async contact => {
  try {
    const { data } = await axios.post('/contacts', contact);
    return data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
});

const deleteContact = createAsyncThunk('contacts/delete', async id => {
  try {
    await axios.delete(`/contacts/${id}`);
    // deleteToast('The contact is deleted');
    return id;
  } catch (error) {
    console.log(error);
    return error.message;
  }
});

export const contactsOperations = { getContacts, addContact, deleteContact };
export default contactsOperations;
