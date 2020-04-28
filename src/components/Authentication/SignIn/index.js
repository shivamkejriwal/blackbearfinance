import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import Button from '@material-ui/core/Button';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Container from '@material-ui/core/Container';
import EmailIcon from '@material-ui/icons/Email';
// import FacebookIcon from '@material-ui/icons/Facebook';
import Divider from '@material-ui/core/Divider';
import { withFirebase } from '../../Firebase';
import * as ROUTES from '../../../constants/routes';
import SignInFormBase from './signInFormBase';

import { Firestore } from '../../../utils/firestore';
import { Logger } from '../../../utils/logger';

const SignInPage = () => (
  <div>
    <Container component='main' maxWidth='xs'>
      <List component='nav' aria-label='main mailbox folders'>
        <ListItem button>
          <ListItemIcon>
            <EmailIcon />
          </ListItemIcon>
          <SignInGoogle />
        </ListItem>
        {/* <ListItem button>
          <ListItemIcon>
            <FacebookIcon />
          </ListItemIcon>
          <SignInFacebook />
        </ListItem> */}
      </List>
    </Container>
    <Divider />
    <SignInForm />
  </div>
);

const ERROR_CODE_ACCOUNT_EXISTS =
  'auth/account-exists-with-different-credential';

const ERROR_MSG_ACCOUNT_EXISTS = `
  An account with an E-Mail address to
  this social account already exists. Try to login from
  this account instead and associate your social accounts on
  your personal account page.
`;


const storeUser = (module, UserPayload) => {
  // Create a user in your Firebase Realtime Database too
  return Firestore()
    .getUser()
    .then(user => {
      Logger().log('SignIn-foundUser');
      // const context = {};
      // const success = Firestore().setUser(user, context);
      // if (success) {
      //   console.log('SignIn-userSaved', user.uid);
      // }
    });
}

const onSuccess = (module) => {
  Logger().log('SignIn-onSuccess');
  module.setState({ error: null });
  module.props.history.push(ROUTES.HOME);
}

const errorHandler = (module, error) => {
  if (error.code === ERROR_CODE_ACCOUNT_EXISTS) {
    error.message = ERROR_MSG_ACCOUNT_EXISTS;
  }
  Logger().log('SignIn-errorHandler', {
    code: error.code,
    message: error.message
  });
  module.setState({ error });
}


class SignInGoogleBase extends Component {
  constructor(props) {
    super(props);

    this.state = { error: null };
  }

  onSubmit = event => {
    this.props.firebase
      .doSignInWithGoogle()
      .then(UserPayload => storeUser(this, UserPayload))
      .then(onSuccess(this))
      .catch(e => errorHandler(this, e));

    event.preventDefault();
  };

  render() {
    const { error } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <Button type='submit'>Sign In with Google</Button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

class SignInFacebookBase extends Component {
  constructor(props) {
    super(props);

    this.state = { error: null };
  }

  onSubmit = event => {
    this.props.firebase
      .doSignInWithFacebook()
      .then(UserPayload => storeUser(this, UserPayload))
      .then(onSuccess(this))
      .catch(e => errorHandler(this, e));

    event.preventDefault();
  };

  render() {
    const { error } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <Button type='submit'>Sign In with Facebook</Button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

class SignInTwitterBase extends Component {
  constructor(props) {
    super(props);

    this.state = { error: null };
  }

  onSubmit = event => {
    this.props.firebase
      .doSignInWithTwitter()
      .then(UserPayload => storeUser(this, UserPayload))
      .then(onSuccess(this))
      .catch(e => errorHandler(this, e));

    event.preventDefault();
  };

  render() {
    const { error } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <Button type='submit'>Sign In with Twitter</Button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const SignInForm = compose(
  withRouter,
  withFirebase,
)(SignInFormBase);

const SignInGoogle = compose(
  withRouter,
  withFirebase,
)(SignInGoogleBase);

const SignInFacebook = compose(
  withRouter,
  withFirebase,
)(SignInFacebookBase);

const SignInTwitter = compose(
  withRouter,
  withFirebase,
)(SignInTwitterBase);

export default SignInPage;

export { SignInForm, SignInGoogle, SignInFacebook, SignInTwitter };