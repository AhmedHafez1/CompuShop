import { PRODUCTS_URL } from '../constants';
import { Product } from '../models/product.model';
import { apiSlice } from './api.slice';

export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => {
    return {
      getProducts: builder.query<Product[], void>({
        query: () => ({
          url: PRODUCTS_URL,
        }),
        keepUnusedDataFor: 5,
      }),
    };
  },
});

export const { useGetProductsQuery } = productsApiSlice;
