import { Fragment } from 'react';
import Navbar from './Headers.js/Navbar';
import { connect } from 'react-redux';

const Layout = (props) => {
  return (
    <Fragment>
      <Navbar />
      {props.children}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  userInfoStore: state.authInfo.userInfoStore,
});

export default connect(mapStateToProps, null)(Layout);
