import { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import AddFab from '../common/Headers.js/AddFab';
import PostListing from '../components/HomeComp/PostListing/PostListing';
import Search from '../components/BookmarkComp/Search';
import * as actionCreator from '../redux/Actions/ActionCreator/ResourceAction';
import Link from 'next/link';

const HomePage = (props) => {
  const { GetResourcesAction } = props;

  useEffect(() => {
    GetResourcesAction();
  }, []);

  return (
    <Fragment>
      <div className="mx-auto">
        <div className="container-fluid">
          <Search />
          <div className="row">
            <div className="col-12 col-md-8">
              <h5>Latest</h5>
              <PostListing />
            </div>
            <div className="col-4">
              <h5>What&apos; new</h5>
              {[0, 0, 0, 0].map((item, index) => {
                return (
                  <div className="trending-card my-2 p-3" key={index}>
                    <Link href={'/discussion/postId'} as={'/discussion/123'} style={{ color: 'inherit', textDecoration: 'none' }}>
                      <div className="m-3">
                        <b>This is the best React resource</b>
                      </div>
                    </Link>

                    <div className="m-3 fw-500">Web Dev Simplified</div>
                    <div className="m-3 text-muted">Youtube</div>
                  </div>
                );
              })}
            </div>
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
