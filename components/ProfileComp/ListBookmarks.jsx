import { milliToDate } from '../../utils/GlobalFunctions';

const ListBookmarks = (props) => {
  const { postData } = props;

  return (
    <section className="p-2">
      <div className="my-3 text-right">
        <div className="dropdown dropdown-menu-left">
          <label className="btn btn-secondary dropdown-toggle" type="button" id="Sort" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Sort
          </label>
          <div className="dropdown-menu" aria-labelledby="Sort">
            <button className="dropdown-item" type="button">
              Oldest first
            </button>
            <button className="dropdown-item" type="button">
              Newest first
            </button>
            <button className="dropdown-item" type="button">
              Most comments
            </button>
            <button className="dropdown-item" type="button">
              Most upvotes
            </button>
            <button className="dropdown-item" type="button">
              Most downvotes
            </button>
          </div>
        </div>
      </div>
      {postData?.length ? (
        <>
          {postData?.map((item, index) => {
            return (
              <div className="profile-profile_division-right-post bg-white mt-3 cursor-pointer" key={index}>
                <div className="profile-profile_division-right-post--content">
                  <div className="fs-10">{item.postedDate ? milliToDate(item.postedDate) : ''}</div>
                  <div className="font-weight-bold">{item.resourceData[0].title}</div>
                  <div>{item.resourceData[0].description}</div>
                </div>
                <div className="profile-profile_division-right-post--actions">
                  <div className="contentcard_socials_comment">
                    <img src={'/static/icons/bookmark-filled.png'} alt="comment section" />
                  </div>
                </div>
              </div>
            );
          })}
        </>
      ) : null}
    </section>
  );
};

export default ListBookmarks;
