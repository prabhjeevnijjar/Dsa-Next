import { Fragment } from 'react';
import PostComp from '../../components/DiscussionComp/PostComp';

const DiscussionPage = () => {
  return (
    <Fragment>
      <div className="rootclass">
        <div className="d-flex-col my-5 mx-auto w-75">
          <div className="header">
            <div className="logo">
              <img src={'/static/icons/discussion.png'} alt="comment section" />
            </div>
            <div className="heading">
              <h2>Thread ...</h2>
            </div>
          </div>
          <div className="contentcards">
            <PostComp />
          </div>
          <div className="discussion">
            <div className="discussion_addnew">
              <h4>Add to the discussion</h4>
              <textarea type="text"></textarea>
              <button type="submit">Publish</button>
            </div>
            <div className="discussion_comments_enclosure">
              <div className="discussion_comment_box">
                <div>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default DiscussionPage;
