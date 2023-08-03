import { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import AddFab from '../common/Headers.js/AddFab';
import Search from '../components/BookmarkComp/Search';
import * as actionCreator from '../redux/Actions/ActionCreator/ResourceAction';
import RightPostListing from '../components/HomeComp/RightPostListing/RightPostListing';
import API from '../config/endpoints.json';
import PostCard from '../components/HomeComp/PostListing/PostCard';
import PostCardLoader from '../components/HomeComp/Loaders/PostCardLoader';

const HomePage = () => {
  const [resData, setImages] = useState([]);
  const [page, setPage] = useState(0);

  const fetchImages = async (page) => {
    const response = await fetch('https://dsa-help-platform.onrender.com' + API.getAllResourcesApi + '?page=' + page || 1);
    const { data } = await response.json();
    setImages((prev) => [...prev, ...data]);
  };

  useEffect(() => {
    fetchImages(page);
  }, [page]);

  return (
    <Fragment>
      <div className="mx-auto">
        <div className="container-fluid">
          <Search />
          <div className="row">
            <div className="col-12 col-md-8">
              <h5>Latest</h5>
              <div>
                {resData?.length ? (
                  <>
                    {[...resData]?.map((data, index) => {
                      return <PostCard key={index} data={data} isLast={index === resData.length - 1} newLimit={() => setPage(page + 1)} />;
                    })}
                  </>
                ) : (
                  [0, 1, 2].map((item, index) => {
                    return <PostCardLoader key={index} />;
                  })
                )}
              </div>
            </div>
            <RightPostListing />
          </div>
        </div>

        <div className="d-block d-md-none">
          <AddFab />
        </div>
      </div>
    </Fragment>
  );
};

const mapDispatchToProps = (dispatch) => ({ GetResourcesAction: (payload) => dispatch(actionCreator.GetResourcesAction(payload)) });
const mapStateToProps = (state) => ({ allResourceStore: state.resourceInfo.allResourceStore });

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
