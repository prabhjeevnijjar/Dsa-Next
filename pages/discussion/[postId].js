import { Fragment } from 'react';
import PostComp from '../../components/DiscussionComp/PostComp';
import API from '../../config/endpoints.json';

const DiscussionPage = (props) => {
  const { resData } = props;

  return (
    <Fragment>
      <div className="rootclass">
        <div className="d-flex-col my-5 mx-auto w-75">
          <div className="header">
            <div className="logo">
              <img src={'/static/icons/discussion.png'} alt="comment section" />
            </div>
          </div>
          {resData.code === 200 ? (
            <Fragment>
              <div className="contentcards">
                <PostComp resData={resData} />
              </div>
              <div className="discussion">
                <div className="discussion_addnew">
                  <h4>Thread(0)</h4>
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
            </Fragment>
          ) : (
            <>No Post found</>
          )}
        </div>
      </div>
    </Fragment>
  );
};

DiscussionPage.getInitialProps = async (ctx) => {
  try {
    const res = await fetch('http://localhost:3001' + API.getResourceByIdApi + '?resId=' + ctx.query.postId);
    const json = await res.json();
    return { resData: json };
  } catch (err) {
    return { resData: {} };
  }
};

export default DiscussionPage;
