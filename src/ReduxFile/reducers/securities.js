import { Types } from "../actions/actionTypes";

const initialState = {
  securities: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.SECURITIES:
      return {
        ...state,
        securities: action.payload.data,
      };

    default:
      return state;
  }
};

export default reducer;