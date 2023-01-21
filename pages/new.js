import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';
import { RESOURCE_TYPE, RESOURCE_SUB_TYPE, RESOURCE_STUDY_TYPE } from '../utils/constants';
import DropdownSearchComp from '../components/commonComp/DropdownSearchComp';
import * as resAction from '../redux/Actions/ActionCreator/ResourceAction';
import toast from 'react-hot-toast';

const NewPostPage = (props) => {
  const { userData } = props;
  const [state, setState] = useState({ title: '', resourceurl: '', description: '' });
  const [resType, setResType] = useState('');
  const [resSubType, setResSubType] = useState('');
  const [resStudyType, setResStudyType] = useState('');

  const onChangeHandler = (event) => setState({ ...state, [event.target.name]: event.target.value });

  const onSubmitHandler = () => {
    if (!userData.isLogin) toast.error('You need to login');
    else if (!state.title.trim()?.length) toast.error('Title is required');
    else if (!state.resourceurl.trim()?.length) toast.error('Resource URL is required');
    else if (!resType.trim()?.length) toast.error('Resource Type is required');
    else if (!resSubType.trim()?.length) toast.error('Sub Type is required');
    else if (!resStudyType.trim()?.length) toast.error('Study Type is required');
    else {
      const body = {
        postedBy: userData.user.userId,
        title: state.title,
        description: state.description,
        resourcelink: state.resourceurl,
        resourcetype: resType,
        resourcesubtype: resSubType,
        resourceauthor: '',
        resourcestudytype: resStudyType,
        status: 'Published',
      };
      props.PostResourcesAction(body);
    }
  };

  return (
    <Fragment>
      <section className="post_base mx-5 my-5 mr-5">
        <section>
          <img src={'/static/icons/pen-write.png'} alt="pen write" />
          <h1>Create a new Post</h1>
        </section>
        <section className="d-flex flex-row flex-wrap width p-0">
          <DropdownSearchComp data={RESOURCE_TYPE} holder={'Category'} setValue={setResType} />
          <DropdownSearchComp data={RESOURCE_SUB_TYPE} holder={'Type'} setValue={setResSubType} />
          <DropdownSearchComp data={RESOURCE_STUDY_TYPE} holder={'Content'} setValue={setResStudyType} />
        </section>
        <section>
          <div className="form-group width">
            <textarea className="form-control" id="title" name="title" value={state.title} rows="1" placeholder="Write heading here" onChange={(e) => onChangeHandler(e)}></textarea>
          </div>
          <div className="form-group width">
            <textarea className="form-control" id="resourceurl" name="resourceurl" value={state.resourceurl} rows="1" placeholder="Paste link here" onChange={(e) => onChangeHandler(e)}></textarea>
          </div>
          <div className="form-group width">
            <textarea
              className="form-control"
              id="description"
              name="description"
              value={state.description}
              rows="4"
              placeholder="Write description here"
              onChange={(e) => onChangeHandler(e)}
            ></textarea>
          </div>
          <div>
            <button
              type="button"
              className="btn btn-success"
              onClick={() => {
                onSubmitHandler();
              }}
            >
              Publish
            </button>
          </div>
        </section>
      </section>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.authInfo.userInfoStore,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    PostResourcesAction: (payload) => dispatch(resAction.PostResourcesAction(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewPostPage);
