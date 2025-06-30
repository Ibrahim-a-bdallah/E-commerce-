import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
  selectedProductId: null,
};

const popupSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    openPopup: (state, action) => {
      state.open = true;
      state.selectedProductId = action.payload;
    },
    closePopup: (state) => {
      state.open = false;
      state.selectedProductId = null;
    },
  },
});

export const { openPopup, closePopup } = popupSlice.actions;
export default popupSlice.reducer;
