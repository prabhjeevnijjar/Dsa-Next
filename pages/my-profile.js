import { Fragment, useState } from 'react';
import EditProfileImage from '../components/ProfileComp/EditProfileImage';
import ListSection from '../components/ProfileComp/ListSection';
import { PROFILE_LIST_TYPE } from '../utils/constants';
import ListMe from '../components/ProfileComp/ListMe';
import ListPosts from '../components/ProfileComp/ListPosts';
import ListLikes from '../components/ProfileComp/ListLikes';
import ListComments from '../components/ProfileComp/ListComments';
import ListBookmarks from '../components/ProfileComp/ListBookmarks';

const MyProfilePage = () => {
  const [selectedSection, setSelectedSection] = useState(PROFILE_LIST_TYPE.me);
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
        <div className="col-md-9 bg-light">
          {selectedSection === PROFILE_LIST_TYPE.me ? (
            <ListMe />
          ) : selectedSection === PROFILE_LIST_TYPE.posts ? (
            <ListPosts />
          ) : selectedSection === PROFILE_LIST_TYPE.likes ? (
            <ListLikes />
          ) : selectedSection === PROFILE_LIST_TYPE.comments ? (
            <ListComments />
          ) : selectedSection === PROFILE_LIST_TYPE.bookmarks ? (
            <ListBookmarks />
          ) : null}
        </div>
      </section>
      <EditProfileImage />
    </Fragment>
  );
};

export default MyProfilePage;
