const CommentSection = () => {
  return (
    <div className="w-100 my-3">
      <div className="fs-26">Comments</div>

      <div className="add-comment my-3">
        <span className="btn-circle btn btn-primary mx-2"></span>
        <input className="add-comment__input px-2" placeholder="Add your comment..."></input>
        <img className="add-comment__send cursor-pointer" src="/static/icons/send-message.png"></img>
      </div>
      <div className="comments-container">
        {[0, 0, 0, 0, 0]?.map((item, index) => {
          return (
            <div className="comments-card bg-white p-3 mt-2" key={index}>
              <div className="comments-card-personal">
                <div>
                  <span className="btn-circle btn btn-secondary mx-2"></span>
                  <span className="mx-2 cursor-pointer">@Prabhjeev</span>
                  <span className="text-secondary">5h</span>
                </div>
                <div className="author-tag p-1">Author</div>
              </div>
              <div className="p-4">Wow this is actully the post i learnt about this topic </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CommentSection;
