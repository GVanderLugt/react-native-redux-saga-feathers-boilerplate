import { Map } from 'immutable';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

// components
import { View } from 'react-native';
import { SearchBar as SearchBarInput } from 'react-native-elements';

class SearchBar extends Component {
  static propTypes = {
    user:       PropTypes.instanceOf(Map).isRequired,
    clearUsers: PropTypes.func.isRequired,
    fetchUsers: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      data: Map({
        showClearIcon: false,
      }),
    };
  }

  handleChange = (value) => {
    const { clearUsers, fetchUsers } = this.props;

    console.log('handleChange', value);

    if (value && !this.state.data.get('showClearIcon')) {
      this.setState({ data: this.state.data.set('showClearIcon', true) });
    } else if (!value) {
      this.setState({ data: this.state.data.set('showClearIcon', false) });
    }

    if (value) {
      fetchUsers({ search: value });
    } else clearUsers();
  }

  renderClearIcon = () => {
    let element;

    if (this.state.data.get('showClearIcon')) {
      element = { color: '#999', name: 'close' };
    }

    return element;
  }

  render() {
    const loading = this.props.user.get('loading') || false;

    return (
      <View>
        <SearchBarInput onChangeText={ this.handleChange }
          showLoading={ loading }
          clearIcon={ this.renderClearIcon() } />
      </View>
    );
  }
}

export default SearchBar;
