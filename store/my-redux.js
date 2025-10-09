export function myCreateStore(reducer) {
  let state;
  let listners = [];
  let store = {
    dispatch(action) {
      state = reducer(state, action);
      listners.forEach((listner) => {
        listner();
      });
    },
    getState() {
      return state;
    },
    subscribe(listner) {
      listners.push(listner);
      //   return function () {
      //     const index = listners.findIndex((a) => a == listner);
      //     return listners.slice(index);
      //   };
    },
  };
  return store;
}
