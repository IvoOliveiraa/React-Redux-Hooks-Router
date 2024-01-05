import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  botaoClicado: false,
};

const exampleSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    botaoClicado: (state) => ({
      ...state,
      botaoClicado: !state.botaoClicado,
    }),
  },
});

export const { botaoClicado } = exampleSlice.actions;
export default exampleSlice.reducer;
