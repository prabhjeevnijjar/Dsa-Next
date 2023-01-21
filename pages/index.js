import { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import AddFab from '../common/Headers.js/AddFab';
import PostCard from '../components/HomeComp/PostCard';
import * as actionCreator from '../redux/Actions/ActionCreator/ResourceAction';

const HomePage = (props) => {
  const { GetResourcesAction } = props;
  useEffect(() => {
    GetResourcesAction();
  }, []);

  const [isDesktop, setDesktop] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 768) {
      setDesktop(true);
    } else {
      setDesktop(false);
    }
    const updateMedia = () => {
      if (window.innerWidth > 768) {
        setDesktop(true);
      } else {
        setDesktop(false);
      }
    };
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  }, []);

  return (
    <div>
      <div className="mx-auto">
        {isDesktop ? (
          <div className="d-flex mx-5 my-5">
            <div className="leftcolumn">
              <h2>All Posts</h2>

              <PostCard />
            </div>
            <div className="rightcolumn">
              <h2>Featured</h2>
              <h2>What&apos;s new</h2>
              <h2>Recommended</h2>
            </div>
          </div>
        ) : (
          <Fragment>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="custom_tab_font nav-item">
                <a className="nav-link active" id="Posts-tab" data-toggle="tab" href="#Posts" role="tab" aria-controls="Posts" aria-selected="true">
                  Posts
                </a>
              </li>
              <li className="custom_tab_font nav-item">
                <a className="nav-link" id="Featured-tab" data-toggle="tab" href="#Featured" role="tab" aria-controls="Featured" aria-selected="false">
                  Featured
                </a>
              </li>
              <li className="custom_tab_font nav-item">
                <a className="nav-link" id="whatsnew-tab" data-toggle="tab" href="#whatsnew" role="tab" aria-controls="whatsnew" aria-selected="false">
                  What&apos;s new
                </a>
              </li>
              <li className="custom_tab_font nav-item">
                <a className="nav-link" id="Recommended-tab" data-toggle="tab" href="#Recommended" role="tab" aria-controls="Recommended" aria-selected="false">
                  Recommended
                </a>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div className="tab-pane fade show active" id="Posts" role="tabpanel" aria-labelledby="Posts-tab">
                <PostCard />
              </div>
              <div className="tab-pane fade" id="Featured" role="tabpanel" aria-labelledby="Featured-tab">
                Featured
              </div>
              <div className="tab-pane fade" id="whatsnew" role="tabpanel" aria-labelledby="whatsnew-tab">
                whatsnew
              </div>
              <div className="tab-pane fade" id="Recommended" role="tabpanel" aria-labelledby="Recommended-tab">
                Recommended
              </div>
            </div>
            <AddFab />
          </Fragment>
        )}
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    GetResourcesAction: () => dispatch(actionCreator.GetResourcesAction()),
  };
};

export default connect(null, mapDispatchToProps)(HomePage);
