import { connect } from 'react-redux';

// action creators
import { userCreate } from '../../../actions/userActions';

// components
import Register from './Register';

const mapStateToProps = state => ({
  form: state.get('form'),
});

const mapDispatchToProps = dispatch => ({
  createUser: (params) => {
    dispatch(userCreate(params));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
