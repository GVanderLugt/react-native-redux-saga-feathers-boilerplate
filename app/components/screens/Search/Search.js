import Immutable, { Map } from 'immutable';
import PropTypes from 'prop-types';
import React from 'react';
import { denormalize } from 'normalizr';

// components
import { View } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import SearchBar from '../../SearchBar';
import StatusBar from '../../StatusBar';

// schemas
import { userListSchema } from '../../../schemas/user';

// styles
import styles from './styles';

const Search = function ({ user }) {
  const result = ((user.get('data') || Map()).get('result') || Immutable.List()).toJS();
  const items = ((user.get('data') || Map()).get('items') || Immutable.List()).toJS();

  const users = denormalize(result, userListSchema, { user: items });

  return (
    <View style={ styles.screenContainer }>
      <StatusBar />
      <SearchBar />

      <List>
        {
          users.map(u => (
            <ListItem key={ u._id } title={ u.name } />
          ))
        }
      </List>
    </View>
  );
};

Search.propTypes = {
  user: PropTypes.instanceOf(Map).isRequired,
};

export default Search;
