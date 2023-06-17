import { Fragment } from 'react';

const PostCard = (props) => {
  const { data } = props;
  return (
    <Fragment>
      <div className="card col-11 my-1 ">
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
            <img className="width-25" src={'/static/icons/bookmark-border.png'} alt="bookmark" />
          </div>
        </div>
        <br></br>

        {data.title ? (
          <div className="row-12">
            <div className="row-12">
              <b>{data.title}</b>
            </div>
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
              <span>Show replies({data.commentcount})</span>
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
    </Fragment>
  );
};

export default PostCard;
