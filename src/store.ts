import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { itemApi } from './slices/itemSlice';

export default configureStore({
  reducer: {
    [itemApi.reducerPath]: itemApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(itemApi.middleware)
})