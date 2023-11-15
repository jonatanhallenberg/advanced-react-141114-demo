import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Item } from '../api/types';

// Define a service using a base URL and expected endpoints
export const itemApi = createApi({
  reducerPath: 'itemApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5001/' }),
  endpoints: (builder) => ({
    getItems: builder.query<Item[], null>({
      query: () => `items`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetItemsQuery } = itemApi