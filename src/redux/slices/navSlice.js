import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    origin: null,
    destination: null,
}

export const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    setOrigin: (state, action) => {
      state.value += action.payload
    },
    setDestination: (state, action) => {
        state.value += action.payload
      },
  },
})

// Action creators are generated for each case reducer function
export const { setDestination, setOrigin } = navSlice.actions

export default navSlice.reducer