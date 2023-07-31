import { Fragment, useEffect } from 'react';
import Navbar from './Headers.js/Navbar';
import { connect } from 'react-redux';
import Cookies from 'js-cookie';
import * as authActionCreator from '../redux/Actions/ActionCreator/AuthAction';

const Layout = (props) => {
  useEffect(() => {
    if (Cookies.get('dsa-token')) props.checkTokenAction(Cookies.get('dsa-token'));
  }, []);

  return (
    <Fragment>
      <Navbar />
      {props.children}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({ userInfoStore: state.authInfo.userInfoStore });

const mapDispatchToProps = (dispatch) => ({ checkTokenAction: (payload) => dispatch(authActionCreator.checkTokenAction(payload)) });

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
