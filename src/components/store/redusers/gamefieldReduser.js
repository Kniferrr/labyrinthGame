import { createSlice } from '@reduxjs/toolkit'

export const gamefieldReduser = createSlice({
  name: 'gamefieldReduser',
  initialState: {
    fieldSize: {x: 3, y: 3},
    error: null,
    start: {first: 0, second: 0},
    end: {first: 0, second: 0},
    matrix: [],
    gameEnd: false,
  },
  reducers: {
    ERROR: (state, action) => {
    state.error = action.payload;
    },
    setMatix: (state, action) => {
    state.matrix = action.payload;
    state.gameEnd=false;
    },
    endgame: (state, action) => {
      
      state.gameEnd = true;
      },
  },
})

// Action creators are generated for each case reducer function
export const { ERROR, setMatix,endgame} = gamefieldReduser.actions

export default gamefieldReduser.reducer