const ListBookmarks = () => {
  return (
    <section className="p-2">
      {' '}
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
    </section>
  );
};

export default ListBookmarks;
