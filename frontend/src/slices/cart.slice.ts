/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from '@reduxjs/toolkit';

const initialState = localStorage.getItem('cart')
  ? JSON.parse(localStorage.getItem('cart')!)
  : { cartItems: [], itemsPrice: 0, shippingPrice: 0, tax: 0, totalPrice: 0 };

export function addDecimal(num: number) {
  return Number(Math.round((num * 100) / 100).toFixed());
}
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cartItems.find((x: any) => x._id === item._id);
      if (existingItem) {
        state.cartItems = state.cartItems.map((x: any) =>
          x._id === item.id ? item : x
        );
      } else {
        state.cartItems = [...state.cartItems, item];
      }

      state.itemsPrice = addDecimal(
        state.cartItems.reduce(
          (acc: number, item: { price: number; qty: number }) => {
            return acc + item.price * item.qty;
          },
          0
        )
      );
      state.shippingPrice = state.itemsPrice >= 100 ? 0.0 : 10.0;
      state.tax = addDecimal(0.15 * state.itemsPrice);
      state.totalPrice = state.itemsPrice + state.shippingPrice + state.tax;

      localStorage.setItem('cart', JSON.stringify(state));

      return state;
    },
  },
});

export const { addToCart } = cartSlice.actions;
