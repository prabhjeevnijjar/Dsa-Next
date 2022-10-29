import { Fragment } from 'react';
import DropdownSearchComp from '../components/commonComp/DropdownSearchComp';
import { RESOURCE_TYPE, RESOURCE_SUB_TYPE, RESOURCE_STUDY_TYPE } from '../utils/constants';
const NewPostPage = () => {
  return (
    <Fragment>
      <section className="post_base mx-5 my-5 mr-5">
        <section>
          <img src={'/static/icons/pen-write.png'} alt="pen write" />
          <h1>Create a new Post</h1>
        </section>
        <section className="d-flex flex-row flex-wrap width p-0">
          <DropdownSearchComp data={RESOURCE_TYPE} holder={'Category'} />
          <DropdownSearchComp data={RESOURCE_SUB_TYPE} holder={'Type'} />
          <DropdownSearchComp data={RESOURCE_STUDY_TYPE} holder={'Content'} />
        </section>
        <section>
          <div className="form-group width">
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="1" placeholder="Write heading here"></textarea>
          </div>
          <div className="form-group width">
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="1" placeholder="Paste link here"></textarea>
          </div>
          <div className="form-group width">
            <textarea className="form-control" id="exampleFormControlTextarea2" rows="4" placeholder="Write description here"></textarea>
          </div>
          <div>
            <button type="button" className="btn btn-success">
              Publish
            </button>
          </div>
        </section>
      </section>
    </Fragment>
  );
};

export default NewPostPage;
