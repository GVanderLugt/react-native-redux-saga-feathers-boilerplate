import React from 'react';
import { TabNavigator } from 'react-navigation';

// screens
import Map from '../../components/screens/Map';
import Search from '../../components/screens/Search';
import Icon from 'react-native-vector-icons/FontAwesome';

const AuthenticatedStack = TabNavigator({
  Map: {
    screen: Map,
  },

  Search: {
    screen: Search,
  },
}, {
  tabBarPosition: 'bottom',
  swipeEnabled:   false,

  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ tintColor }) => { // eslint-disable-line react/prop-types
      const { state: { routeName } } = navigation;

      let iconName;

      if (routeName === 'Map') {
        iconName = 'map-o';
      } else if (routeName === 'Search') {
        iconName = 'search';
      }

      return <Icon name={ iconName } size={ 25 } color={ tintColor } />;
    },
  }),
});

export default AuthenticatedStack;
