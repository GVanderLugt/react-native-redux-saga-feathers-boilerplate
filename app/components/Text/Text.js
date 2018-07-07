import React from 'react';

// components
import { Text as DefaultText } from 'react-native';

const Text = function (props) {
  return <DefaultText { ...props } />;
};

export default Text;
