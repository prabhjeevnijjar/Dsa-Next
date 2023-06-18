import * as actionConstant from '../Actions/ActionConstant/index';

const initialState = {
  allBookmarkStore: [],
};

export const BookmarkReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionConstant.GET_ALL_BOOKMARKS:
      return { ...state, allBookmarkStore: action.payload };

    default:
      return state;
  }
};
