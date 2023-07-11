import { Fragment, useState } from 'react';
import EditProfileImage from '../components/ProfileComp/EditProfileImage';
import ListSection from '../components/ProfileComp/ListSection';

const MyProfilePage = () => {
  const [selectedSection, setSelectedSection] = useState('');
  return (
    <Fragment>
      <section className="profile-solid_color_bar"></section>
      <section>
        <div className="profile-profile_image btn" data-toggle="modal" data-target="#EditProfileImage"></div>
        <span></span>
      </section>
      <section>
        <div className="profile-profile-name text-left">Prabhjeev Singh</div>
      </section>
      <section className="profile-profile_division row m-0">
        <div className="col-md-3 bg-light d-none d-md-block">
          <ListSection selectedSection={selectedSection} setSection={setSelectedSection} />
        </div>
      </section>
      <EditProfileImage />
    </Fragment>
  );
};

export default MyProfilePage;
