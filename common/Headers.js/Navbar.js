import { Fragment } from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';

const Navbar = (props) => {
  const { userInfoStore } = props;

  return (
    <Fragment>
      <nav className="navbar navbar-dark bg-dark navbar-expand-md justify-content-between">
        <Link className="no_link_style" href="/">
          <a className="navbar-brand" href="#">
            Tech Resources
          </a>
        </Link>
        <div className="d-flex flex-column justify-content-end">
          <label
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="true"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </label>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              {userInfoStore.isLogin ? (
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

                    <button className="dropdown-item" type="button">
                      Sign Out
                    </button>
                  </div>
                </div>
              ) : (
                <Fragment>
                  <button
                    className="nav-item active btn btn-outline-secondary mr-3 no_link_style"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                  >
                    <Link href="/enter">
                      <a>Log In</a>
                    </Link>
                  </button>
                  <button
                    className="nav-item active btn btn-outline-success my-2 my-sm-0 no_link_style"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                  >
                    <Link href="/enter">Create Account</Link>
                  </button>
                </Fragment>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    userInfoStore: state.authInfo.userInfoStore,
  };
};

export default connect(mapStateToProps, null)(Navbar);
