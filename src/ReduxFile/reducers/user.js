import { Types } from "../actions/actionTypes";

const initialState = {
  users: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.USER:
      return {
        ...state,
        users: action.payload.data,
      };

    default:
      return state;
  }
};

export default reducer;