import { Fragment, useEffect } from 'react';
import Navbar from './Headers.js/Navbar';
import { connect } from 'react-redux';
import Cookies from 'js-cookie';
import * as authActionCreator from '../redux/Actions/ActionCreator/AuthAction';
import LoginModal from '../components/commonComp/LoginModal';
import Footer from './Footers';

const Layout = (props) => {
  useEffect(() => {
    if (Cookies.get('dsa-token')) props.checkTokenAction(Cookies.get('dsa-token'));
  }, []);

  return (
    <Fragment>
      <Navbar />
      {props.children}
      <LoginModal />
      <Footer />
    </Fragment>
  );
};

const mapStateToProps = (state) => ({ userInfoStore: state.authInfo.userInfoStore });

const mapDispatchToProps = (dispatch) => ({ checkTokenAction: (payload) => dispatch(authActionCreator.checkTokenAction(payload)) });

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
