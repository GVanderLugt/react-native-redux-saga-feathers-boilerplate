import PropTypes from 'prop-types';
import { Map } from 'immutable';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import createRootLayout from './config/routes/Root';

// action creators
import { sessionVerify } from './actions/sessionActions';

// lib
import Navigator from './lib/navigator';

class App extends Component {
  static propTypes = {
    session:       PropTypes.instanceOf(Map).isRequired,
    verifySession: PropTypes.func.isRequired,
  }

  componentWillMount() {
    const { verifySession } = this.props;

    verifySession();
  }

  render() {
    const { session } = this.props;

    const Layout = createRootLayout(session.get('valid'));

    return <Layout ref={ navigatorRef => Navigator.setContainer(navigatorRef) } />;
  }
}

const mapStateToProps = state => ({
  session: state.get('session'),
});

const mapDispatchToProps = dispatch => ({
  verifySession: () => {
    dispatch(sessionVerify());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
