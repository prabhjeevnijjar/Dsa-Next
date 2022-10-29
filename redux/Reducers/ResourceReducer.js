import * as actionConstant from '../Actions/ActionConstant/index';

const initialState = {
  allResourceStore: [],
};

export const ResourceReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionConstant.GET_ALL_RESOURCES:
      return { ...state, allResourceStore: action.payload };

    default:
      return state;
  }
};
