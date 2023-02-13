import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios';
import {toast} from 'react-toastify';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    loginStatus: 'idle',
    validationStatus: 'idle',
    user: null,
    error: null,
    message: '',
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload
    },
    logout: (state) => {
      state.user = null
    }
  },
  extraReducers(builder) {
    builder
      .addCase(logIn.pending, (state, action) => {
        state.loginStatus = 'loading'
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.loginStatus = 'succeeded'
        state.message = action.payload.message

        toast.success(state.message);
      })
      .addCase(logIn.rejected, (state, action) => {
        state.loginStatus = 'failed'
        state.error = action.payload.message

        toast.error(state.error)
      })
      .addCase(fetchRegister.fulfilled, (state, action) => {
        toast.success(action.payload.message)
      })
      .addCase(fetchRegister.rejected, (state, action) => {
        toast.error(action.payload.message)
      })
      .addCase(checkToken.pending, (state, action) => {
        state.validationStatus = 'pending';
      })
      .addCase(checkToken.fulfilled, (state, action) => {
        state.user = action.payload
        state.validationStatus = 'succeeded';
      })
      .addCase(checkToken.rejected, (state, action) => {
        state.validationStatus = 'failed'
      })
  }
})

export const checkToken = createAsyncThunk('auth/check', async () => {
  const response = await axios.get('https://api.maykanacademy.com/api/auth/me', {
    headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
  })
  return response.data.data
})

export const logIn = createAsyncThunk('auth/login', async (data, {rejectWithValue}) => {
  try {
    const response = await axios.post('https://api.maykanacademy.com/api/auth/login', data);
    const token = response.data.data.token;
    localStorage.setItem('token', token);
    checkToken()
    return response.data.data;
  } catch (e) {
    return rejectWithValue(e.response.data)
  }
})

export const fetchRegister = createAsyncThunk('auth/register', async (data, {rejectWithValue}) => {
  try {
    const response = await axios.post('https://api.maykanacademy.com/api/auth/register', data);
    return response.data;
  } catch (e) {
    return rejectWithValue(e.response.data)
  }
})

export const {setToken, logout} = authSlice.actions

export default authSlice.reducer
