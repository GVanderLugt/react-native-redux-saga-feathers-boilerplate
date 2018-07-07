import { connect } from 'react-redux';

// action creators
import { userFetchAll, userClearAll } from '../../actions/userActions';

// components
import SearchBar from './SearchBar';

const mapStateToProps = state => ({
  user: state.get('user'),
});

const mapDispatchToProps = dispatch => ({
  clearUsers: () => {
    dispatch(userClearAll());
  },

  fetchUsers: (params) => {
    dispatch(userFetchAll(params));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
