import { PROFILE_LIST_TYPE } from '../../utils/constants';

const ListSection = (props) => {
  return (
    <div className="profile-profile_division-list p-3">
      <ul className="list-unstyled">
        <li className={`cursor-pointer p-2 mt-2 ${props.selectedSection === PROFILE_LIST_TYPE.me ? 'bg-white' : ''}`} onClick={() => props.setSection(PROFILE_LIST_TYPE.me)}>
          Me
        </li>
        <li className={`cursor-pointer p-2 mt-2 ${props.selectedSection === PROFILE_LIST_TYPE.posts ? 'bg-white' : ''}`} onClick={() => props.setSection(PROFILE_LIST_TYPE.posts)}>
          Posts
        </li>
        <li className={`cursor-pointer p-2 mt-2 ${props.selectedSection === PROFILE_LIST_TYPE.likes ? 'bg-white' : ''}`} onClick={() => props.setSection(PROFILE_LIST_TYPE.likes)}>
          Likes
        </li>
        <li className={`cursor-pointer p-2 mt-2 ${props.selectedSection === PROFILE_LIST_TYPE.comments ? 'bg-white' : ''}`} onClick={() => props.setSection(PROFILE_LIST_TYPE.comments)}>
          Comments
        </li>
        <li className={`cursor-pointer p-2 mt-2 ${props.selectedSection === PROFILE_LIST_TYPE.bookmarks ? 'bg-white' : ''}`} onClick={() => props.setSection(PROFILE_LIST_TYPE.bookmarks)}>
          Bookmarks
        </li>
      </ul>
    </div>
  );
};

export default ListSection;
