import { Map } from 'immutable';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

// action creators
import { NavigationActions } from 'react-navigation';

// components
import { View } from 'react-native';
import Button from '../../Button';
import Text from '../../Text';
import LoginForm from './components/LoginForm';
import StatusBar from '../../StatusBar';

// styles
import styles from './styles';

class Login extends Component {
  static propTypes = {
    createSession: PropTypes.func.isRequired,
    form:          PropTypes.instanceOf(Map).isRequired,
    navigation:    PropTypes.instanceOf(Object).isRequired,
  }

  handleSubmit = () => {
    const { form, createSession } = this.props;

    const loginForm = form.get('login') || Map();
    const values = loginForm.get('values') || Map();

    if (!loginForm.get('syncErrors')) {
      createSession(values.toJS());
    }
  }

  navigateToRegister = () => {
    const { navigation: { dispatch } } = this.props;
    const { navigate } = NavigationActions;

    dispatch(navigate({ routeName: 'Register' }));
  }

  render() {
    const { form } = this.props;

    const loginForm = form.get('login') || Map();

    let disableButton = false;

    if (loginForm.get('syncErrors')) { disableButton = true; }

    return (
      <View style={ styles.screenContainer }>
        <StatusBar />

        <View style={ styles.copyContainer }>
          <Text>Login</Text>
        </View>

        <View style={ styles.formContainer }>
          <LoginForm />

          <Button title='Log In'
            disabled={ disableButton }
            loading={ Boolean(loginForm.get('submitting')) }
            onPress={ this.handleSubmit } />

          <Button title='Create an Account' onPress={ this.navigateToRegister } />
        </View>
      </View>
    );
  }
}

export default Login;
