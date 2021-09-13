import { Types } from "./actionTypes";

export const ActionCreators = {
  userData: (data) => ({ type: Types.USER, payload: { data } }),
  allUserData: (data) => ({ type: Types.USERS, payload: { data } }),
  allSecurityData: (data) => ({ type: Types.SECURITIES, payload: { data } }),
};