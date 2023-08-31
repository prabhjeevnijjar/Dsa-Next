import { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import AddFab from '../common/Headers.js/AddFab';
import Search from '../components/BookmarkComp/Search';
import * as actionCreator from '../redux/Actions/ActionCreator/ResourceAction';
import RightPostListing from '../components/HomeComp/RightPostListing/RightPostListing';
import API from '../config/endpoints.json';
import PostCard from '../components/HomeComp/PostListing/PostCard';
import PostCardLoader from '../components/HomeComp/Loaders/PostCardLoader';
import useMediaQuery from '../hoc/useMediaQuery';

const HomePage = (props) => {
  const { userData } = props;
  const [resData, setImages] = useState([]);
  const [page, setPage] = useState(0);
  const isMobile = useMediaQuery('(max-width: 767px)');
  console.log({ userData });
  const fetchImages = async (page) => {
    const response = await fetch('http://localhost:3001' + API.getAllResourcesApi + '?page=' + page || 1);
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
            {!isMobile ? <RightPostListing heading={`${"What's New"}`} /> : null}
          </div>
        </div>
        {isMobile && userData.isLogin ? <AddFab /> : null}
      </div>
    </Fragment>
  );
};

const mapDispatchToProps = (dispatch) => ({ GetResourcesAction: (payload) => dispatch(actionCreator.GetResourcesAction(payload)) });
const mapStateToProps = (state) => ({ userData: state.authInfo.userInfoStore, allResourceStore: state.resourceInfo.allResourceStore });

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
