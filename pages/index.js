import { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import AddFab from '../common/Headers.js/AddFab';
import PostListing from '../components/HomeComp/PostListing/PostListing';
import * as actionCreator from '../redux/Actions/ActionCreator/ResourceAction';

const HomePage = (props) => {
  const { GetResourcesAction } = props;

  useEffect(() => {
    GetResourcesAction();
  }, []);

  return (
    <Fragment>
      <div className="mx-auto">
        <div className="">
          <div className="col-12">
            <h2>Latest</h2>
            <PostListing />
          </div>
        </div>
        <div className="d-block d-md-none">
          <AddFab />
        </div>
      </div>
    </Fragment>
  );
};

const mapDispatchToProps = (dispatch) => ({ GetResourcesAction: () => dispatch(actionCreator.GetResourcesAction()) });

export default connect(null, mapDispatchToProps)(HomePage);
