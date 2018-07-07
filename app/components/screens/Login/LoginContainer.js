import { connect } from 'react-redux';

// components
import Login from './Login';

// action creators
import { sessionCreate } from '../../../actions/sessionActions';

const mapStateToProps = state => ({
  form: state.get('form'),
});

const mapDispatchToProps = dispatch => ({
  createSession: (params) => {
    dispatch(sessionCreate(params));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
