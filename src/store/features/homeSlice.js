import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

export const homeSlice = createSlice({
  name: 'home',
  initialState: {
    error: null,
    items: []
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchItems.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.items = action.payload.lessons
      })
  }
})

export const fetchItems = createAsyncThunk('home/items', async () => {
  const result = await axios.get(' https://api.maykanacademy.com/api/home');
  return result.data.data
})

export default homeSlice.reducer
