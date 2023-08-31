import { connect } from 'react-redux';
import { addBookmarkHandler } from '../../utils/API/resourceActions';

const PostComp = (props) => {
  const { resData, userData } = props;
  console.log({ resData });

  return (
    <>
      <div className="contentcards">
        <div className="rootclass">
          <div className="contentcard">
            <div className="contentcard_title">
              <a>{resData.data[0]?.title}</a>
            </div>
            <div className="contentcard_desc">
              <a>{resData.data[0]?.description}</a>
            </div>
            <div className="contentcard_tags">
              {resData.data[0]?.resourcestudytype?.map((data, index) => {
                return <span key={index}>#{data}&nbsp;</span>;
              })}
              {resData.data[0]?.resourcesubtype?.map((data, index) => {
                return <span key={index}>#{data}&nbsp;</span>;
              })}
              #{resData.data[0]?.resourcetype}&nbsp;
            </div>
            <div className="contentcard_socials">
              <div className="contentcard_socials_comment">
                <img src={'/static/icons/thumb-up-outline.png'} alt="comment section" />
                <a> {resData.data[0].upvotecount}</a>
              </div>
              <div className="contentcard_socials_comment">
                <img src={'/static/icons/thumb-down-outline.png'} alt="comment section" />
                <a> {resData.data[0].downvotecount}</a>
              </div>
              <div className="contentcard_socials_comment">
                <img src={'/static/icons/comment-outline.png'} alt="comment section" />
                <a> {resData.data[0].commentcount}</a>
              </div>

              <div className="contentcard_socials_comment" onClick={() => addBookmarkHandler({ userData, resData })}>
                <img src={'/static/icons/bookmark-border.png'} alt="bookmark" />
              </div>
            </div>
            <br />
            <hr />
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.authInfo.userInfoStore,
  };
};

export default connect(mapStateToProps)(PostComp);
