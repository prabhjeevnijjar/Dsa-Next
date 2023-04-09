const Bookmarks = () => {
  return (
    <div className="rightSection_bookmarks mt-5">
      {[0, 0, 0, 0, 0, 0].map((item, index) => {
        return (
          <div className="rightSection_bookmarks-bookmark my-3 mx-3 px-2 py-2" key={index}>
            <div className="rightSection_bookmarks-bookmark-label w-100">
              <span className="pill px-3 py-1 text-nowrap text-capitalize">React</span>
            </div>
            <div className="rightSection_bookmarks-bookmark-name w-100">
              <h4 className="px-2">My card heading new something</h4>
            </div>
            <div className="rightSection_bookmarks-bookmark-date px-2">
              <p>March 4, 2023</p>
            </div>
            <div className="rightSection_bookmarks-bookmark-cta px-2">
              <span>.</span>
              <span>.</span>
              <span>.</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Bookmarks;
