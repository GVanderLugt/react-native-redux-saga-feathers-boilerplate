import { StackNavigator } from 'react-navigation';

// navigators
import UnauthenticatedStack from './Unauthenticated';
import AuthenticatedStack from './Authenticated';

const createRootNavigator = (authenticated = false) => StackNavigator({
  Unauthenticated: {
    screen: UnauthenticatedStack,

    navigationOptions: {
      gesturesEnabled: false,
    },
  },

  Authenticated: {
    screen: AuthenticatedStack,

    navigationOptions: {
      gesturesEnabled: false,
    },
  },
}, {
  headerMode:       'none',
  mode:             'modal',
  initialRouteName: authenticated ? 'Authenticated' : 'Unauthenticated',
});

export default createRootNavigator;
