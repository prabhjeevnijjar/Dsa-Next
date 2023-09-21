import { Fragment } from 'react';
import PostComp from '../../components/DiscussionComp/PostComp';
import API from '../../config/endpoints.json';
import RightPostListing from '../../components/HomeComp/RightPostListing/RightPostListing';
import CommentSection from '../../components/DiscussionComp/CommentSection';

const DiscussionPage = (props) => {
  const { resData } = props;

  return (
    <Fragment>
      <div className="container-fluid">
        <div className="row my-5">
          <div className="col-12 col-md-8">
            <div className="d-flex-col w-100">
              <div className="header">
                <div className="logo">
                  <img src={'/static/icons/discussion.png'} alt="comment section" />
                </div>
              </div>
              {resData.code === 200 ? (
                <Fragment>
                  <PostComp resData={resData} />
                  <CommentSection resData={resData} />
                </Fragment>
              ) : (
                <>404 No Post found</>
              )}
            </div>
          </div>
          <RightPostListing heading={'Similar Posts'} />
        </div>
      </div>
    </Fragment>
  );
};

DiscussionPage.getInitialProps = async (ctx) => {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + API.getResourceByIdApi + '?resId=' + ctx.query.postId);
    const json = await res.json();
    return { resData: json };
  } catch (err) {
    return { resData: {} };
  }
};

export default DiscussionPage;
