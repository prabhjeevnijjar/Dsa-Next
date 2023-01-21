import { useState } from 'react';

const DropdownSearchComp = (props) => {
  const { data, holder, setValue } = props;

  const [state, setState] = useState({ value: holder });
  const [suggestion, setSuggestion] = useState(data);

  const onChangeHandler = (event) => {
    const query = event.target.value.trim().toLowerCase();
    setState({ ...state, value: query });

    const filterSuggestions = data.filter((item) => item.toLowerCase().indexOf(state.value) > -1);
    setSuggestion(filterSuggestions);
  };

  const onClickHandler = async (event) => {
    await setSuggestion(data);
    await setState({ ...state, value: event.target.value });
    await setValue(event.target.value);
  };

  return (
    <div className="dropdown mr-2 my-2">
      <button className="btn btn-info dropdown-toggle my-0" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        {state.value.trim().length > 0 ? state.value : holder}
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
        <div className="form-group">
          <input type="text" className="form-control border-top-0 border-right-0 border-left-0 my-0" id="searchCat" placeholder="Search . . ." onChange={(e) => onChangeHandler(e)} />
        </div>
        <div className="scrollable-menu">
          {suggestion?.map((item, index) => {
            return (
              <button className="dropdown-item" type="button" key={index} value={item} onClick={(e) => onClickHandler(e)}>
                {item}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DropdownSearchComp;
