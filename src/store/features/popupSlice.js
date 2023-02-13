import {createSlice} from '@reduxjs/toolkit'

export const popupSlice = createSlice({
  name: 'popup',
  initialState: {
    isLoginOpened: false,
    isRegisterOpened: false
  },
  reducers: {
    openLogin: (state) => {
      state.isLoginOpened = true
    },
    closeLogin: (state) => {
      state.isLoginOpened = false
    },
    toggleLogin: (state) => {
      state.isLoginOpened = !state.isLoginOpened
    },
    openRegister: (state) => {
      state.isRegisterOpened = true
    },
    closeRegister: (state) => {
      state.isRegisterOpened = false
    },
    toggleRegister: (state) => {
      state.isRegisterOpened = !state.isRegisterOpened
    },
  },
})

export const {openLogin, closeLogin, openRegister, closeRegister, toggleLogin, toggleRegister} = popupSlice.actions

export default popupSlice.reducer
