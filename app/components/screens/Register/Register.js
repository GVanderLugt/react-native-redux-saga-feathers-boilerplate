import { Map } from 'immutable';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

// components
import { View } from 'react-native';
import Button from '../../Button';
import Text from '../../Text';
import RegisterForm from './components/RegisterForm';
import StatusBar from '../../StatusBar';

// styles
import styles from './styles';

class Register extends Component {
  static propTypes = {
    createUser: PropTypes.func.isRequired,
    form:       PropTypes.instanceOf(Map).isRequired,
  }

  handleSubmit = () => {
    const { createUser, form } = this.props;

    const registerForm = form.get('register') || Map();
    const values = registerForm.get('values') || Map();

    if (!registerForm.get('syncErrors')) {
      createUser(values.toJS());
    }
  }

  renderErrorMessage = () => {
    const { form } = this.props;

    const registerForm = form.get('register') || Map();

    let element;

    if (registerForm.get('submitFailed')) {
      element = <Text>Error, try again</Text>;
    }

    return element;
  }

  render() {
    const { form } = this.props;

    const registerForm = form.get('register') || Map();

    let disableButton = false;

    if (registerForm.get('syncErrors')) { disableButton = true; }

    return (
      <View style={ styles.screenContainer }>
        <StatusBar />
        <RegisterForm />

        <Button title='Create Account'
          disabled={ disableButton }
          loading={ Boolean(registerForm.get('submitting')) }
          onPress={ this.handleSubmit } />

        { this.renderErrorMessage() }
      </View>
    );
  }
}

export default Register;
