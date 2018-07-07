import { connect } from 'react-redux';

// components
import Search from './Search';

const mapStateToProps = state => ({
  user: state.get('user'),
});

export default connect(mapStateToProps)(Search);
