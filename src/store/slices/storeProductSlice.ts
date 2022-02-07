import { createSlice } from '@reduxjs/toolkit';

type ProductsToBuy = {
  title:'',
  amount: 0,
  totalPriceForAllItems: ''
}

const initialState = {
  storeProduct: [] as ProductsToBuy[],
};

const storeProductSlice = createSlice({
  name: 'storeProduct',
  initialState,
  reducers: {
    setProductItemData: (state, action) => {
      state.storeProduct.push(action.payload);
    },
  },
});

export const { setProductItemData } = storeProductSlice.actions
export default storeProductSlice.reducer;
