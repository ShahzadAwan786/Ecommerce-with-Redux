import { useDispatch } from "react-redux";
import { loadData } from "../cartListReducer";

export const apiMiddleware =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    if (action.type === "api/makeCall") {
      const { url, onSucess, onLoading, onError } = action.payload;
      const BASE_URL = "https://fakestoreapi.com";

      dispatch({ type: onLoading });
      fetch(`${BASE_URL}/${url}`)
        .then((res) => res.json())
        .then((data) => dispatch({ type: onSucess, payload: data }))
        .catch(() => {
          dispatch({ type: onError });
        });
    } else {
      next(action);
    }
  };

export const fetchData = (payload) => ({ type: "api/makeCall", payload });
