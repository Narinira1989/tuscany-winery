import { createSlice } from "@reduxjs/toolkit";

export const winesSlice = createSlice({
  name: "wines",
  initialState: {
    selectedCategory: "ALL",
  },
  reducers: {
    filterCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const { filterCategory } = winesSlice.actions;
export const getSelectedCategory = (state) => state.wines.selectedCategory;
export default winesSlice.reducer;
