const PostComp = (props) => {
  const data = {};
  return (
    <>
      <div className="contentcards">
        <div className="rootclass" key={1}>
          <div className="contentcard">
            <div className="contentcard_title">
              <a>{data.title}</a>
            </div>
            <div className="contentcard_tags">
              {data?.resourcestudytype?.map((data, index) => {
                return <span key={index}>#{data}&nbsp;</span>;
              })}
              {data?.resourcesubtype?.map((data, index) => {
                return <span key={index}>#{data}&nbsp;</span>;
              })}
              #{data.resourcetype}&nbsp;
            </div>
            <div className="contentcard_socials">
              <div className="contentcard_socials_comment">
                <img src={'/static/icons/thumb-up-outline.png'} alt="comment section" />
                <a> {data.upvotecount}</a>
              </div>
              <div className="contentcard_socials_comment">
                <img src={'/static/icons/thumb-down-outline.png'} alt="comment section" />
                <a> {data.downvotecount}</a>
              </div>
              <div className="contentcard_socials_comment">
                <img src={'/static/icons/comment-outline.png'} alt="comment section" />
                <a> {data.commentcount}</a>
              </div>

              <div className="contentcard_socials_comment">
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
export default PostComp;
