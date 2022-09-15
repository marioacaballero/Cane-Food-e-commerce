import { CLEAN_DETAIL, GET_DETAIL } from "../actions/ProdDetail/ActionTypes";

const initialState = JSON.parse(
  window.localStorage.getItem("prodDetailState") ||
    JSON.stringify({
      prodDetail: {},
      prodEditDetail: {},
    })
);

const saveState = (state) => {
  window.localStorage.setItem("prodDetailState", JSON.stringify(state));
};

export default function prodDetailReducer(
  state = initialState,
  { type, payload }
) {
  let newState;
  switch (type) {
    case GET_DETAIL: {
      newState = {
        ...state,
        prodDetail: payload,
        prodEditDetail: payload,
      };
      break;
    }
    case CLEAN_DETAIL: {
      newState = {
        ...state,
        prodDetail: payload,
      };
      break;
    }

    default:
      newState = state;
  }

  saveState(newState);
  return newState;
}
