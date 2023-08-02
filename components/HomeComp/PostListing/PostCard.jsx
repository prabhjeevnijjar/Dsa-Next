import Link from 'next/link';
import { Fragment, useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import { addBookmarkHandler, upVoteHandler, downVoteHandler, showCommentsHandler } from '../../../utils/resourceActions';

const PostCard = (props) => {
  const { data, userData, newLimit, isLast } = props;
  const cardRef = useRef();

  useEffect(() => {
    if (!cardRef?.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (isLast && entry.isIntersecting) {
        newLimit();
        observer.unobserve(entry.target);
      }
    });

    observer.observe(cardRef.current);
  }, [isLast]);

  return (
    <Fragment>
      <div className="post-card card col-12 my-2 " ref={cardRef}>
        <div className=" card--user row">
          <div className="col-9">
            <label className="btn-circle btn-sm btn-secondary" type="button">
              P
            </label>
            <span className="text-secondary mx-1">
              <b>@prabhjeev</b>
            </span>
            <span className="text-secondary mx-1">{Math.ceil((Date.now() - data.postedDate) / (1000 * 60 * 60 * 24))}d</span>
          </div>
          <div className="col-3 cursor-pointer text-right d-flex flex-column align-items-end">
            <Link href={'/discussion/postId'} as={`/discussion/${data._id}`} style={{ color: 'inherit', textDecoration: 'none' }}>
              <img className="width-25" src={'/static/icons/maximize.png'} alt="open" />
            </Link>
            <img className="width-25 mt-3" src={'/static/icons/bookmark-border.png'} alt="bookmark" onClick={() => addBookmarkHandler({ userData })} />
          </div>
        </div>
        <br></br>

        {data.title ? (
          <div className="row-12 fs-26">
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
              <span className="cursor-pointer" onClick={() => showCommentsHandler({ userData })}>
                Show replies({data.commentcount})
              </span>
            </div>
            <div className="col-5">
              <div className="row">
                <span
                  className="col-5 contentcard_socials_comment cursor-pointer"
                  onClick={() => {
                    upVoteHandler({ userData });
                  }}
                >
                  <img src={'/static/icons/thumb-up-outline.png'} alt="comment section" />
                </span>
                <span
                  className="col-5 contentcard_socials_comment cursor-pointer"
                  onClick={() => {
                    downVoteHandler({ userData });
                  }}
                >
                  <img src={'/static/icons/thumb-down-outline.png'} alt="comment section" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.authInfo.userInfoStore,
  };
};

export default connect(mapStateToProps)(PostCard);
