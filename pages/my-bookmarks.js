import { Fragment, useEffect } from 'react';
import Search from '../components/BookmarkComp/Search';
import Bookmarks from '../components/BookmarkComp/Bookmarks';
import { connect } from 'react-redux';
import * as bookmarkActionCreator from '../redux/Actions/ActionCreator/BookmarkAction';
const MyBookmarksPage = (props) => {
  const { allBookmarkStore } = props;

  useEffect(() => {
    props.GetBookmarksAction();
  }, []);

  return (
    <Fragment>
      <div className="bookmarks_container d-flex my-5">
        <div className="leftSection d-md-block d-none ml-5">
          <h5 className="mt-3">Filters</h5>
        </div>
        <div className="rightSection d-block px-5">
          <Search />
          <div className="rightSection_bookmarks mt-5">
            {allBookmarkStore?.map((data, index) => {
              return <Bookmarks data={data} key={index} />;
            })}
          </div>
          <div className="container mt-5 d-flex justify-content-center">
            <button className="rightSection_loadmore px-3">Load More</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({ allBookmarkStore: state.bookmarksInfo.allBookmarkStore });
const mapDispatchToProps = (dispatch) => ({ GetBookmarksAction: (payload) => dispatch(bookmarkActionCreator.GetBookmarksAction(payload)) });

export default connect(mapStateToProps, mapDispatchToProps)(MyBookmarksPage);
