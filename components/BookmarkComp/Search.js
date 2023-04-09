import { Fragment } from 'react';

const Search = () => {
  return (
    <Fragment>
      <div className="searchbar d-flex-col" suppressHydrationWarning={true}>
        <input id="searchbar" className="p-3" type="search" placeholder="What are you looking for ?"></input>
        <label className="searchbar_date" htmlFor="searchbar">
          {new Date().toLocaleTimeString('en-us', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
        </label>
      </div>
    </Fragment>
  );
};
export default Search;
