import Link from 'next/link';
import { Fragment } from 'react';

const PostCard = (props) => {
  const { data } = props;

  const addBookmarkHandler = (id) => {
    console.log({ id });
  };

  return (
    <Fragment>
      <Link className="card col-12 my-2 " href={'/discussion/postId'} as={`/discussion/${data._id}`} style={{ color: 'inherit', textDecoration: 'none' }}>
        <div>
          <div className="card--user row">
            <div className="col-9">
              <label className="btn-circle btn-sm btn-secondary" type="button">
                P
              </label>
              <span className="text-secondary mx-1">
                <b>@prabhjeev</b>
              </span>
              <span className="text-secondary mx-1">{Math.ceil((Date.now() - data.postedDate) / (1000 * 60 * 60 * 24))}d</span>
            </div>
            <div className="col-3 cursor-pointer text-right">
              <img className="width-25" src={'/static/icons/bookmark-border.png'} alt="bookmark" onClick={() => addBookmarkHandler(data._id)} />
            </div>
          </div>
          <br></br>

          {data.title ? (
            <div className="row-12">
              <b>{data.title}</b>
            </div>
          ) : null}
          <div className="row-12">
            <div className="row-12">{data.description}</div>
          </div>
          <div className="row-12 text-center text-muted">
            {[...data.resourcestudytype, ...data.resourcestudytype, ...data.resourcesubtype]?.slice(0, 5).map((item, index) => {
              return (
                <span className="m-1" key={index}>
                  #{item}
                </span>
              );
            })}
          </div>
          <br></br>
          <div className="row-12 text-primary fs-10">
            <div className="row">
              <div className="col-5">
                <span className="cursor-pointer">Show replies({data.commentcount})</span>
              </div>
              <div className="col-5">
                <div className="row">
                  <div className="col-5 contentcard_socials_comment cursor-pointer">
                    <img src={'/static/icons/thumb-up-outline.png'} alt="comment section" />
                  </div>
                  <div className="col-5 contentcard_socials_comment cursor-pointer">
                    <img src={'/static/icons/thumb-down-outline.png'} alt="comment section" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </Fragment>
  );
};

export default PostCard;
