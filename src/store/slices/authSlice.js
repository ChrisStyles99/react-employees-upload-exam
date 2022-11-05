import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state) => {
      state.isLoggedIn = true
    }
  }
});

export const { login } = authSlice.actions;

export default authSlice.reducer;