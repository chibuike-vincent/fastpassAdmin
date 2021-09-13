import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import user from "../ReduxFile/reducers/user";
import users from "../ReduxFile/reducers/users";
import securities from "../ReduxFile/reducers/securities"

const rootReducer = combineReducers({
    user: user,
    users: users,
    securities: securities
});

const configureStore = () => {
  return createStore(rootReducer, compose(applyMiddleware(thunk)));
};

export default configureStore;