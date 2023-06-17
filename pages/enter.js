import { connect } from 'react-redux';
import * as authActionCreator from '../redux/Actions/ActionCreator/AuthAction';
import * as actionType from '../redux/Actions/ActionTypes/index';
import toast from 'react-hot-toast';
import { checkInputHandler } from '../utils/GlobalFunctions';
const { Fragment, useState } = require('react');

const EnterPage = (props) => {
  const { checkLoginStore, CheckEmailAction, authStepSuccess, CheckRegisterAction, LoginAction } = props;
  const [state, setState] = useState({ fname: '', lname: '', email: '', password: '', cpassword: '' });

  const onChangeHandler = (event) => (checkInputHandler(event) ? setState({ ...state, [event.target.name]: event.target.value }) : '');
  const onClearHandler = () => setState({ ...state, fname: '', lname: '', email: '', password: '', cpassword: '' });
  const submitCheckEmail = () => {
    if (
      !state.email ||
      // eslint-disable-next-line no-useless-escape
      !state.email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    ) {
      toast.error('Use a valid email');
    } else CheckEmailAction({ email: state.email });
  };

  const loginSubmmitHandler = () => {
    if (!state.email || !state.password) {
      toast.error('Please Enter Credentials !');
    } else {
      const data = { email: state.email, password: state.password };
      LoginAction(data);
      setState({ ...state, password: '' });
    }
  };

  const submitSignUp = () => {
    if (!state.fname) toast.error('Enter valid First Name');
    else if (!state.lname) toast.error('Enter valid Last Name');
    else if (!state.password || !state.cpassword || state.password !== state.cpassword) toast.error('Confirmed password does not match');
    else {
      const data = { FirstName: state.fname, LastName: state.lname, Email: state.email, Password: state.password, PasswordConfirmation: state.cpassword };
      CheckRegisterAction(data);
      setState({ ...state, fname: '', lname: '', password: '', cpassword: '' });
    }
  };
  console.log('STREP::::', checkLoginStore.onStep);
  return (
    <Fragment>
      {checkLoginStore.onStep === 1 ? (
        <div className="d-flex d-row justify-content-center p-0 m-0">
          <div className="signupbase">
            <div className="heading">
              <h1>Sign In</h1>
            </div>
            <br />
            <br />
            <div className="inputs">
              <a>Enter your email</a> <br />
              <input
                name="email"
                type="email"
                maxLength={36}
                value={state.email}
                required
                onChange={(e) => {
                  setState({ ...state, [e.target.name]: e.target.value });
                }}
              />
              <br />
              <br />
              <br />
              <button className="button" type="submit" value="Sign In" onClick={() => submitCheckEmail()}>
                Sign In
              </button>
            </div>
          </div>
        </div>
      ) : checkLoginStore.onStep === 2 ? (
        <div className="d-flex d-row justify-content-center p-0 m-0">
          <div className="signupbase">
            <div className="heading">
              <h1>Login</h1>
              <a>Don&apos;t have an account? </a>
              <span
                className="text-success cursor-pointer"
                onClick={() => {
                  authStepSuccess({ onStep: 1 });
                  onClearHandler();
                }}
              >
                Create Account
              </span>
            </div>
            <br />
            <br />
            <div className="inputs">
              <form>
                <a>Email</a> <br />
                <input name="email" type="email" value={state.email} required readOnly />
                <br />
                <a>Password</a> <br />
                <input name="password" type="password" value={state.password} required onChange={(e) => onChangeHandler(e)} /> <br />
                <br />
                <br />
                <input className="button" type="button" value="Login" onClick={() => loginSubmmitHandler()} />
              </form>
            </div>
          </div>
        </div>
      ) : (
        <div className="d-flex d-row justify-content-center p-0 m-0">
          <div className="signupbase">
            <div className="heading">
              <h1>Sign Up</h1>
              <span>Have an account? </span>
              <span
                className="text-success cursor-pointer"
                onClick={() => {
                  authStepSuccess({ onStep: 2 });
                  onClearHandler();
                }}
              >
                Sign In
              </span>
            </div>
            <br />
            <br />
            <div className="inputs">
              <a>First name</a> <br />
              <input
                name="fname"
                type="text"
                value={state.fname}
                maxLength={22}
                required
                onChange={(e) => {
                  onChangeHandler(e);
                }}
              />
              <br />
              <a>Last Name</a> <br />
              <input
                name="lname"
                type="text"
                value={state.lname}
                maxLength={22}
                required
                onChange={(e) => {
                  onChangeHandler(e);
                }}
              />
              <br />
              <a>Email</a> <br />
              <input name="email" type="email" value={state.email} maxLength={36} required readOnly />
              <br />
              <a>Password</a> <br />
              <input
                name="password"
                type="password"
                value={state.password}
                minLength={8}
                required
                onChange={(e) => {
                  setState({ ...state, [e.target.name]: e.target.value });
                }}
              />
              <br />
              <a>Confirm password</a> <br />
              <input
                name="cpassword"
                type="password"
                value={state.cpassword}
                minLength={8}
                required
                onChange={(e) => {
                  setState({ ...state, [e.target.name]: e.target.value });
                }}
              />
              <br />
              <br />
              <br />
              <button className="button" type="submit" onClick={() => submitSignUp()}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    authStepSuccess: (payload) => dispatch(actionType.authStepSuccess(payload)),
    CheckEmailAction: (payload) => dispatch(authActionCreator.CheckEmailAction(payload)),
    CheckRegisterAction: (payload) => dispatch(authActionCreator.CheckRegisterAction(payload)),
    LoginAction: (payload) => dispatch(authActionCreator.LoginAction(payload)),
  };
};

const mapStateToProps = (state) => {
  return {
    checkLoginStore: state.authInfo.checkLoginStore,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EnterPage);
