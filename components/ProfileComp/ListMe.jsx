import { Fragment } from 'react';

const ListMe = () => {
  return (
    <Fragment>
      <div className="mb-3">
        <label className="small mb-1" htmlFor="inputUsername">
          Username (how your name will appear to other users on the site)
        </label>
        <input className="form-control" id="inputUsername" type="text" placeholder="Enter your username" value="username" readOnly />
      </div>

      <div className="row gx-3 mb-3">
        <div className="col-md-6">
          <label className="small mb-1" htmlFor="inputFirstName">
            First name
          </label>
          <input className="form-control" id="inputFirstName" type="text" placeholder="Enter your first name" value="Valerie" readOnly />
        </div>
        <div className="col-md-6">
          <label className="small mb-1" htmlFor="inputLastName">
            Last name
          </label>
          <input className="form-control" id="inputLastName" type="text" placeholder="Enter your last name" value="Luna" readOnly />
        </div>
      </div>
      <div className="row gx-3 mb-3">
        <div className="col-md-6">
          <label className="small mb-1" htmlFor="inputOrgName">
            Organization name
          </label>
          <input className="form-control" id="inputOrgName" type="text" placeholder="Enter your organization name" value="Start Bootstrap" readOnly />
        </div>
        <div className="col-md-6">
          <label className="small mb-1" htmlFor="inputLocation">
            Location
          </label>
          <input className="form-control" id="inputLocation" type="text" placeholder="Enter your location" value="San Francisco, CA" readOnly />
        </div>
      </div>
      <div className="mb-3">
        <label className="small mb-1" htmlFor="inputEmailAddress">
          Email address
        </label>
        <input className="form-control" id="inputEmailAddress" type="email" placeholder="Enter your email address" value="name@example.com" readOnly />
      </div>
      <div className="row gx-3 mb-3">
        <div className="col-md-6">
          <label className="small mb-1" htmlFor="inputPhone">
            Phone number
          </label>
          <input className="form-control" id="inputPhone" type="tel" placeholder="Enter your phone number" value="555-123-4567" readOnly />
        </div>
        <div className="col-md-6">
          <label className="small mb-1" htmlFor="inputBirthday">
            Birthday
          </label>
          <input className="form-control" id="inputBirthday" type="text" name="birthday" placeholder="Enter your birthday" value="06/10/1988" readOnly />
        </div>
      </div>
      <button className="btn btn-primary" type="button">
        Save changes
      </button>
    </Fragment>
  );
};

export default ListMe;
