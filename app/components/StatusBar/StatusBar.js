import PropTypes from 'prop-types';
import React from 'react';

// components
import { View } from 'react-native';

// styles
import styles from './styles';

const StatusBar = function ({ style }) {
  return (
    <View style={ [styles.statusBar, style || {}] } />
  );
};

StatusBar.propTypes = {
  style: PropTypes.oneOfType([
    PropTypes.instanceOf(Array),
    PropTypes.number,
    PropTypes.instanceOf(Object),
  ]),
};

StatusBar.defaultProps = {
  style: [],
};

export default StatusBar;
