import { Fragment } from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';

import * as authActionCreator from '../../redux/Actions/ActionCreator/AuthAction';

const Navbar = (props) => {
  const { userInfoStore } = props;
  return (
    <Fragment>
      <nav className="navbar navbar-dark bg-dark navbar-expand-md justify-content-between">
        <Link className="navbar-brand" href="/">
          DEV RESOURCES
        </Link>
        <div className="d-flex flex-column justify-content-end">
          {!userInfoStore.isLogin ? (
            <Link href="/enter" className="btn btn-outline-success my-2 my-sm-0 no_link_style">
              Sign In
            </Link>
          ) : (
            <div className="dropdown dropdown-menu-left">
              <label className="btn-circle btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                P
              </label>
              <div className="dropdown-menu" style={{ left: 'auto !important', right: '5px' }} aria-labelledby="dropdownMenu2">
                <button className="dropdown-item" type="button">
                  <Link href="/my-profile">My Profile</Link>
                </button>
                <button className="dropdown-item" type="button">
                  <Link href="/new">New Post</Link>
                </button>
                <button className="dropdown-item" type="button">
                  <Link href="/my-bookmarks">Bookmarks</Link>
                </button>
                <div className="dropdown-divider"></div>
                <button className="dropdown-item" type="button" onClick={() => props.logoutAction()}>
                  Sign Out
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({ userInfoStore: state.authInfo.userInfoStore });

const mapDispatchToProps = (dispatch) => ({ logoutAction: (payload) => dispatch(authActionCreator.logoutAction(payload)) });

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
