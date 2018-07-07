import React, { Component } from 'react';

// components
import { Input } from 'react-native-elements';

// styles
import styles from './styles';

class TextInput extends Component {
  static propTypes = Input.propTypes;

  static defaultProps = {
    meta: {
      error: [],
    },
  }

  shouldDisplayError = () => {
    const {
      meta: {
        active,
        dirty,
        error,
        touched,
      },
    } = this.props;

    return error && !active && (dirty || touched);
  }

  render() {
    const {
      containerStyle,
      errorStyle,
      input = {},
      meta: {
        error = [],
      },
      ...rest
    } = this.props;

    return (
      <Input containerStyle={ [styles.defaultContainer, containerStyle] }
        onBlur={ input.onBlur }
        onChangeText={ input.onChange }
        onFocus={ input.onFocus }
        value={ input.value }
        errorMessage={ error[0] }
        displayError={ this.shouldDisplayError() }
        errorStyle={ [styles.defaultError, errorStyle] }
        { ...rest } />
    );
  }
}

export default TextInput;
