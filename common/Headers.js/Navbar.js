import { Fragment } from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

const Navbar = (props) => {
  const { userInfoStore } = props;
  const router = useRouter();
  console.log({ userInfoStore });
  return (
    <Fragment>
      <nav className="navbar navbar-dark bg-dark navbar-expand-md justify-content-between">
        <Link className="no_link_style avbar-brand" href="/">
          <span>Tech Resources</span>
        </Link>
        <div className="d-flex flex-column justify-content-end">
          {!userInfoStore.isLogin ? (
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
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={() => {
                    if (Cookies.get('auth-token') && Cookies.get('dsa-token')) {
                      Cookies.remove('auth-token');
                      Cookies.remove('dsa-token');
                    }
                    router.reload();
                  }}
                >
                  Sign Out
                </button>
              </div>
            </div>
          )}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              {!userInfoStore.isLogin ? (
                <Fragment>
                  <Link
                    href="/enter"
                    className=" nav-item active btn btn-outline-secondary mr-3 no_link_style"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                  >
                    Log In
                  </Link>

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
              ) : null}
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({ userInfoStore: state.authInfo.userInfoStore });

export default connect(mapStateToProps, null)(Navbar);
