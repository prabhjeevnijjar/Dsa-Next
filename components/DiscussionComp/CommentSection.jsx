import { Fragment, useEffect, useState } from 'react';

import { addCommentsOnPostHandler, fetchCommentsOnPost } from '../../utils/API';

const CommentSection = (props) => {
  const { resData } = props;
  const resourceId = resData.data[0]._id;

  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  console.log({ comments });

  useEffect(() => {
    fetchCommentsOnPost(setComments, resourceId);
  }, [resData]);

  return (
    <div className="w-100 my-3">
      <div className="fs-26">Comments</div>

      <div className="add-comment my-3">
        <span className="btn-circle btn btn-primary mx-2"></span>
        <input className="add-comment__input px-2" placeholder="Add your comment..." value={newComment || ''} onChange={(e) => setNewComment(e.target.value)} />
        <img className="add-comment__send cursor-pointer" src="/static/icons/send-message.png" onClick={() => addCommentsOnPostHandler(comments, setComments, resourceId, newComment)}></img>
      </div>
      <div className="comments-container">
        {comments?.length ? (
          <Fragment>
            {[...comments]?.reverse()?.map((item, index) => {
              return (
                <div className="comments-card bg-white p-3 mt-2" key={index}>
                  <div className="comments-card-personal">
                    <div>
                      <span className="btn-circle btn btn-secondary mx-2"></span>
                      <span className="mx-2 cursor-pointer">@{item.userName || 'Anonymous'}</span>
                      <span className="text-secondary">{Math.ceil((Date.now() - item.postedDate) / (1000 * 60 * 60 * 24))}d</span>
                    </div>
                    <div className="author-tag p-1">Author</div>
                  </div>
                  <div className="p-4">{item.commentText}</div>
                </div>
              );
            })}
          </Fragment>
        ) : (
          <Fragment>No comments yet!</Fragment>
        )}
      </div>
    </div>
  );
};

export default CommentSection;
