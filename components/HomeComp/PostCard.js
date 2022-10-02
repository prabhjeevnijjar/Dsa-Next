import getConfig from 'next/config';
import Link from 'next/link';
const { assetPrefix = '' } = getConfig().publicRuntimeConfig;

const PostCard = () => {
  return (
    <div className="rootclass">
      <div className="contentcard">
        <div className="contentcard_title">
          <a>item</a>
        </div>

        <div className="contentcard_tags">#resourcetype</div>
        <div className="contentcard_socials">
          <div className="contentcard_socials_comment">
            <img src={assetPrefix + '/static/icons/thumb-up-outline.png'} alt="comment section" />
            <a> 12</a>
          </div>
          <div className="contentcard_socials_comment">
            <img src={assetPrefix + '/static/icons/thumb-down-outline.png'} alt="comment section" />
            <a> 11</a>
          </div>
          <Link href="/discussion/1234">
            <div className="contentcard_socials_comment">
              <img src={assetPrefix + '/static/icons/comment-outline.png'} alt="comment section" />
              <a> 3</a>
            </div>
          </Link>
          <div className="contentcard_socials_comment">
            <img src={assetPrefix + '/static/icons/bookmark-border.png'} alt="bookmark" />
          </div>
        </div>
        <br />
        <hr />
      </div>
    </div>
  );
};

export default PostCard;
