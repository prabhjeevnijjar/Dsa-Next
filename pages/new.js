import { Fragment } from 'react';

const NewPostPage = () => {
  return (
    <Fragment>
      <section className="post_base mx-5 my-5 mr-5">
        <section>
          <img src={'/static/icons/pen-write.png'} alt="pen write" />
          <h1>Create a new Post</h1>
        </section>
        <section>
          <div className="form-group width">
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="1" placeholder="Write heading here"></textarea>
          </div>
          <div className="form-group width">
            <textarea className="form-control" id="exampleFormControlTextarea2" rows="4" placeholder="Write description here"></textarea>
          </div>
          <div>
            <button type="button" className="btn btn-info">
              Publish
            </button>
          </div>
        </section>
      </section>
    </Fragment>
  );
};
export default NewPostPage;
