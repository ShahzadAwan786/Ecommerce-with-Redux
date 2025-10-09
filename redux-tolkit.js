import { produce } from "immer";

export function myCreateSlice(config) {
  const { name, initialState, reducers } = config;
  const actions = {};
  Object.keys(reducers).forEach(
    (key) =>
      (actions[key] = function (payload) {
        return { type: `${name}/${key}`, payload };
      })
  );
  function reducer(orignalState = initialState, action) {
    return produce(orignalState, (state) => {
      const caseReducer = reducers[action.type.split("/")[1]];
      if (caseReducer) {
        caseReducer(state, action);
      }
      return state;
    });
  }
  return { actions, reducer };
}
