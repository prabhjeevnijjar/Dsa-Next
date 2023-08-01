import { Fragment } from 'react';

const Search = () => {
  return (
    <Fragment>
      <div className="searchbar d-flex-col py-4" suppressHydrationWarning={true}>
        <input id="searchbar" className="p-3 bg-white fs-20" type="search" placeholder="What are you looking for ?"></input>
        <label className="searchbar_date px-3" htmlFor="searchbar" suppressHydrationWarning={true}>
          {new Date().toLocaleTimeString('en-us', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
        </label>
      </div>
    </Fragment>
  );
};
export default Search;
