import * as actionConstant from '../Actions/ActionConstant/index';

const initialState = {
  checkLoginStore: { onStep: 1 },
  userInfoStore: { isLogin: false },
};

export const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionConstant.USER_AUTH_SUCCESS:
      return { ...state, userInfoStore: action.payload };

    case actionConstant.AUTH_STEP_SUCCESS:
      return { ...state, checkLoginStore: action.payload };

    default:
      return state;
  }
};
