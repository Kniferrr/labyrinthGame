import { createSlice } from '@reduxjs/toolkit'

export const gamefildReduser = createSlice({
  name: 'gamefildReduser',
  initialState: {
    fieldSize: {x: 3, y: 3},
    error: null,
    start: {first: 0, second: 0},
    end: {first: 0, second: 0},
    matrix: [],
  },
  reducers: {
    ERROR: (state, action) => {
    state.error = action.payload;
    },
    setMatix: (state, action) => {
    state.matrix = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { ERROR, setMatix } = gamefildReduser.actions

export default gamefildReduser.reducer