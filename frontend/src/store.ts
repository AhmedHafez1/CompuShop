import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './slices/api.slice';
import { cartSlice } from './slices/cart.slice';

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    cart: cartSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export default store;
