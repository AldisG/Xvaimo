import { createSlice } from '@reduxjs/toolkit';
import { Product } from '../types';

const initialState = {
  storeProduct: {} as Product,
};

const storeProductSlice = createSlice({
  name: 'storeProduct',
  initialState,
  reducers: {
    setProductItemData: (state, action) => {
      state.storeProduct =  action.payload;
    },
  },
});

export const { setProductItemData } = storeProductSlice.actions
export default storeProductSlice.reducer;
