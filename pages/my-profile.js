import { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import EditProfileImage from '../components/ProfileComp/EditProfileImage';
import ListSection from '../components/ProfileComp/ListSection';
import { PROFILE_LIST_TYPE } from '../utils/constants';
import ListMe from '../components/ProfileComp/ListMe';
import ListPosts from '../components/ProfileComp/ListPosts';
import ListLikes from '../components/ProfileComp/ListLikes';
import ListComments from '../components/ProfileComp/ListComments';
import ListBookmarks from '../components/ProfileComp/ListBookmarks';
import { useProfileCallHandler } from '../hoc/profileCallHandler';

const MyProfilePage = (props) => {
  const { userInfoStore } = props;
  const [selectedSection, setSelectedSection] = useState(PROFILE_LIST_TYPE.me);
  const { postData } = useProfileCallHandler(selectedSection);

  console.log({ postData });
  return (
    <Fragment>
      <section className="profile-solid_color_bar"></section>
      <section>
        <div className="profile-profile_image btn" data-toggle="modal" data-target="#EditProfileImage">
          <span className="text-white profile-profile_image--name">{userInfoStore?.user?.first_name.substring(0, 1).toUpperCase() || 'N'}</span>
          <span>
            <img className="text-white profile-profile_image--edit" src="/static/icons/edit.png" />
          </span>
        </div>
      </section>
      <section>
        <div className="profile-profile-name text-left">{userInfoStore?.user?.first_name || 'User'}</div>
      </section>
      <section className="profile-profile_division row m-0">
        <div className="col-md-3 bg-light d-none d-md-block">
          <ListSection selectedSection={selectedSection} setSection={setSelectedSection} />
        </div>
        <div className="col-md-9 bg-light">
          {selectedSection === PROFILE_LIST_TYPE.me ? (
            <ListMe userData={userInfoStore} />
          ) : selectedSection === PROFILE_LIST_TYPE.posts ? (
            <ListPosts postData={postData} />
          ) : selectedSection === PROFILE_LIST_TYPE.likes ? (
            <ListLikes postData={postData} />
          ) : selectedSection === PROFILE_LIST_TYPE.comments ? (
            <ListComments postData={postData} />
          ) : selectedSection === PROFILE_LIST_TYPE.bookmarks ? (
            <ListBookmarks postData={postData} />
          ) : null}
        </div>
      </section>
      <EditProfileImage />
    </Fragment>
  );
};

const mapStateToProps = (state) => ({ userInfoStore: state.authInfo.userInfoStore });

export default connect(mapStateToProps)(MyProfilePage);
