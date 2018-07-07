import { StackNavigator } from 'react-navigation';

// screens
import Login from '../../components/screens/Login';
import Register from '../../components/screens/Register';

const UnauthenticatedStack = StackNavigator({
  Login: {
    screen: Login,
  },

  Register: {
    screen: Register,
  },
}, {
  headerMode: 'none',
});

export default UnauthenticatedStack;
