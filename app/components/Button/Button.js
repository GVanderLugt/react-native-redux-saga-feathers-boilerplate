import React from 'react';

// components
import { Button as ReactNativeElementsButton } from 'react-native-elements';

// styles
import styles from './styles';

const Button = function (props) {
  const {
    containerStyle,
    buttonStyle,
    textStyle,
    ...rest
  } = props;

  return (
    <ReactNativeElementsButton containerStyle={ [styles.defaultButtonContainer, containerStyle] }
      buttonStyle={ [styles.defaultButton, buttonStyle] }
      textStyle={ [styles.defaultText, textStyle] }
      { ...rest } />
  );
};

Button.propTypes = ReactNativeElementsButton.propTypes;

export default Button;
