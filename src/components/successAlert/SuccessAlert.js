import React from 'react';
import AlertDialog from '../alertDialog/AlertDialog';
import history from '../../router/history';

const goToHome = () => {
  history.push('/');
};

const SuccessAlert = ({
  history: {
    location: { state: { title, body, mainAction } = {} }
  }
}) => <AlertDialog title={title} body={body} mainAction={mainAction} handleMainAction={goToHome} />;

export default SuccessAlert;
