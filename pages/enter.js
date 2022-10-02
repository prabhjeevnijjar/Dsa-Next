const { Fragment, useState } = require('react');

const EnterPage = () => {
  const [state, setState] = useState(1);
  return (
    <Fragment>
      {state === 1 ? (
        <div className="d-flex d-row justify-content-center p-0 m-0">
          <div className="signupbase">
            <div className="heading">
              <h1>Sign Up</h1>
              <a>Have an account? </a>
              <a href="/signin">Sign In</a>
            </div>
            <br />
            <br />
            <div className="inputs">
              <form>
                <a>First name</a> <br />
                <input name="fname" type="text" required /> <br />
                <a>Last Name</a> <br />
                <input name="lname" type="text" required /> <br />
                <a>Email</a> <br />
                <input name="email" type="text" required />
                <br />
                <a>Password</a> <br />
                <input name="password" type="text" required /> <br />
                <a>Confirm password</a> <br />
                <input name="cpassword" type="text" required /> <br />
                <br />
                <br />
                <input
                  className="button"
                  type="submit"
                  value="Signup"
                  onClick={() => {
                    setState(2);
                  }}
                />
              </form>
            </div>
          </div>
        </div>
      ) : (
        <div className="d-flex d-row justify-content-center p-0 m-0">
          <div className="signupbase">
            <div className="heading">
              <h1>Login</h1>
              <a>Don&apos;t have an account? </a>
              <a href="/signup">Sign up</a>
            </div>
            <br />
            <br />
            <div className="inputs">
              <form>
                <a>Email</a> <br />
                <input name="email" type="text" required />
                <br />
                <a>Password</a> <br />
                <input name="password" type="text" required /> <br />
                <br />
                <br />
                <input className="button" type="submit" value="Login" />
              </form>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default EnterPage;
