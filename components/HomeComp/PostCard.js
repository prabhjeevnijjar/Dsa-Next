import Link from 'next/link';
import { connect } from 'react-redux';

const PostCard = (props) => {
  const { allResourceStore } = props;

  return (
    <div className="contentcards">
      {allResourceStore?.map((data, index) => {
        return (
          <div className="rootclass" key={index}>
            <div className="contentcard">
              <div className="contentcard_title">
                <a>{data.title}</a>
              </div>
              <div className="contentcard_tags">
                {data?.resourcestudytype.map((data, index) => {
                  return <span key={index}>#{data}&nbsp;</span>;
                })}
                {data?.resourcesubtype.map((data, index) => {
                  return <span key={index}>#{data}&nbsp;</span>;
                })}
                #{data.resourcetype}&nbsp;
              </div>
              <div className="contentcard_socials">
                <div className="contentcard_socials_comment">
                  <img src={'/static/icons/thumb-up-outline.png'} alt="comment section" />
                  <span> {data.upvotecount}</span>
                </div>
                <div className="contentcard_socials_comment">
                  <img src={'/static/icons/thumb-down-outline.png'} alt="comment section" />
                  <span>{data.downvotecount}</span>
                </div>
                <Link href={`/discussion/${data._id}`}>
                  <div className="contentcard_socials_comment">
                    <img src={'/static/icons/comment-outline.png'} alt="comment section" />
                    <span>{data.commentcount}</span>
                  </div>
                </Link>
                <div className="contentcard_socials_comment">
                  <img src={'/static/icons/bookmark-border.png'} alt="bookmark" />
                </div>
              </div>
              <br />
              <hr />
            </div>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    allResourceStore: state.resourceInfo.allResourceStore,
  };
};

export default connect(mapStateToProps, null)(PostCard);
