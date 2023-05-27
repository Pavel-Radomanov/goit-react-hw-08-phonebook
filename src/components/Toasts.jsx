import { toast } from 'react-toastify';
import s from '../Styles.module.css';

export const successToast = text => {
  toast.success(text, {
    position: 'top-left',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    className: s.toast_success,
  });
};

export const infoToast = text => {
  toast.info(text, {
    position: 'top-left',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    className: s.toast_message,
  });
};

export const deleteToast = text => {
  toast.error(text, {
    position: 'top-left',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    className: s.toast_error,
  });
};
