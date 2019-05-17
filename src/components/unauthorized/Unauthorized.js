import React from 'react';
import { AuthenticationConsumer } from '@axa-fr/react-oidc-context';
import AlertDialog from '../alertDialog/AlertDialog';
import history from '../../router/history';
// import AlertDialog from '../alertDialog/AlertDialog';

/* const handleMainAction = pathName => {
  history.push(pathName);
}; */

const handleLogin = loginFn => () => {
  history.push('/');
  loginFn();
};

const goToHome = () => {
  history.push('/');
};

const Unauthorized = ({
  history: {
    location: { state: { title, body, mainAction } = {} }
  }
}) => (
  <React.Fragment>
    <AuthenticationConsumer>
      {props => (
        <React.Fragment>
          {props.oidcUser || !props.isEnabled ? (
            <AlertDialog
              title="Go to homepage"
              body="You are logged in"
              mainAction="Home"
              handleMainAction={goToHome()}
            />
          ) : (
            <AlertDialog
              title={title}
              body={body}
              mainAction={mainAction}
              handleMainAction={handleLogin(props.login)}
            />
          )}
        </React.Fragment>
      )}
    </AuthenticationConsumer>
  </React.Fragment>
);

export default Unauthorized;
