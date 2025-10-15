import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "slice",
  initialState: {
    loading: false,
    list: [],
    error: "",
  },

  reducers: {
    allProduct(state, action) {
      state.list = action.payload;
      state.loading = false;
      state.error = "";
    },
    fetchLoadingProduct(state) {
      state.loading = true;
    },
    fetchErrorProduct(state, action) {
      state.loading = false;
      state.error = action.payload || "Something went wrong!";
    },
  },
});

export const { allProduct, fetchErrorProduct, fetchLoadingProduct } =
  slice.actions;
export default slice.reducer;
