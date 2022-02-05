import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import storeProductSlice from '../slices/storeProductSlice';
import storeApi from '../services/storeApi';

const store = configureStore({
  reducer: {
    [storeApi.reducerPath]: storeApi.reducer,
    storeProductSlice: storeProductSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(storeApi.middleware)
});
setupListeners(store.dispatch)

export default store;
export type RootState = ReturnType<typeof store.getState>
export type ApiDispatch = typeof store.dispatch
