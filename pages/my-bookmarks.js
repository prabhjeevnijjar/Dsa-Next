import { Fragment } from 'react';

import Search from '../components/BookmarkComp/Search';
import Bookmarks from '../components/BookmarkComp/Bookmarks';

const MyBookmarksPage = () => {
  return (
    <Fragment>
      <div className="bookmarks_container d-flex my-5">
        <div className="leftSection d-md-block d-none ml-5">
          <h5 className="mt-3">Filters</h5>
        </div>
        <div className="rightSection d-block px-5">
          <Search />
          <Bookmarks />
          <div className="container mt-5 d-flex justify-content-center">
            <button className="rightSection_loadmore px-3">Load More</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MyBookmarksPage;
