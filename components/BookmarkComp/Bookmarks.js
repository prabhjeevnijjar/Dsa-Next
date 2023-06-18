const Bookmarks = (props) => {
  const { data } = props;

  return (
    <div className="rightSection_bookmarks-bookmark my-3 mx-3 px-2 py-2">
      <div className="rightSection_bookmarks-bookmark-label w-100">
        <span className="pill px-3 py-1 text-nowrap text-capitalize">React</span>
      </div>
      <div className="rightSection_bookmarks-bookmark-name w-100">
        <h4 className="px-2">{data.resourceData[0].title}</h4>
      </div>
      <div className="rightSection_bookmarks-bookmark-date px-2">
        <p>{data.resourceData[0].createdAt}</p>
      </div>
      <div className="rightSection_bookmarks-bookmark-cta px-2">
        <span>.</span>
        <span>.</span>
        <span>.</span>
      </div>
    </div>
  );
};

export default Bookmarks;
