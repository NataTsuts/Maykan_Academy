import {createSlice} from '@reduxjs/toolkit'

export const burgerSlice = createSlice({
  name: 'burger',
  initialState: {
    isOpened: false,
  },
  reducers: {
    openBurger: (state) => {
      state.isOpened = true
    },
    closeBurger: (state) => {
      state.isOpened = false
    },
    toggleBurger: (state) => {
      state.isOpened = !state.isOpened
    }
  },
})

export const {openBurger, closeBurger, toggleBurger} = burgerSlice.actions

export default burgerSlice.reducer
