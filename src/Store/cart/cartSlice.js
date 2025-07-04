import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart(state, action) {
      const product = action.payload;
      const exItem = state.products.find(
        (item) => item.product.id === product.id
      );

      if (exItem) {
        exItem.count += 1;
        exItem.totalPrice += product.price;
      } else {
        state.products.push({
          product,
          count: 1,
          totalPrice: product.price,
        });
      }
    },
 
    increase(state, action) {
      const exItem = state.products.find(
        (item) => item.product.id === action.payload.product.id
      );

      if (exItem) {
        exItem.count += 1;
        exItem.totalPrice += action.payload.product.price;
      } else {
        console.warn("Item not found in cart for increase operation.");
      }
    },

    decrease(state, action) {
      const exItem = state.products.find(
        (item) => item.product.id === action.payload.product.id
      );

      if (exItem && exItem.count > 1) {
        exItem.count -= 1;
        exItem.totalPrice -= action.payload.product.price;
      } else if (exItem) {
        console.warn("Cannot decrease count below 1.");
      } else {
        console.warn("Item not found in cart for decrease operation.");
      }
    },

    removeItem(state, action) {
      state.products = state.products.filter(
        (item) => item.product.id !== action.payload.product.id
      );
    },
  },
});

export const { addCart, removeItem, increase, decrease } = cartSlice.actions;
export default cartSlice.reducer;
