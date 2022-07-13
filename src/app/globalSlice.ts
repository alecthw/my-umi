import { createSlice } from '@reduxjs/toolkit';

export interface GlobalState {
  value: number;
}

const initialState: GlobalState = {
  value: 0,
};

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    add: (state) => {
      state.value += 1;
    },
  },
});

export const { add } = globalSlice.actions;

export default globalSlice.reducer;
