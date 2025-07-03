import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export let cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addCart(state, action) {
      const product = action.payload;
      const exItem = state.find((item) => item.product.id === product.id);

      if (exItem) {
        exItem.count += 1;
        exItem.totalPrice += product.price; 
      } else {
        state.push({
          product,
          count: 1,
          totalPrice: product.price,
        });
      }
    },
    increase(state, action) {
      const exItem = state.find(
        (item) => item?.product?.id === action.payload.product.id
      );

      if (exItem) {
        exItem.count += 1;
        exItem.totalPrice += action.payload.product.price;
      } else {
        console.warn("Item not found in cart for increase operation.");
      }
    },
    decrease(state, action) {
      const exItem = state.find(
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
      const exItem = state.find(
        (item) => item.product.id === action.payload.product.id
      );      
        return state.filter((item) => item.product.id !== action.payload.product.id);
      
    },
  },
});

export const { addCart, decrease, increase, removeItem } = cartSlice.actions;