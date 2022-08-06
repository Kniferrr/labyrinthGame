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
    path: [],
    startPoint: null,
    endPoint: null,
  },
  reducers: {
    ERROR: (state, action) => {
    state.error = action.payload;
    },
    setMatix: (state, action) => {
    state.matrix = action.payload;
    state.gameEnd=false;
    },
    setStartPoint: (state, action) => {
     state.startPoint = action.payload;
      },
      setEndPoint: (state, action) => {
      state.endPoint = action.payload;
      },
      setPath: (state, action) => {
        state.path = action.payload;
      },
    endgame: (state, action) => {
      if(state.endPoint.first === Number(action.payload.first) && state.endPoint.second === Number(action.payload.second)){
        console.log("goood")
        state.gameEnd = "Win";
      }else{
        console.log("false")
        state.gameEnd = "Loss";
      }
      },
  },
})

// Action creators are generated for each case reducer function
export const { ERROR, setMatix,endgame,setPoint,setPath,setStartPoint,setEndPoint} = gamefieldReduser.actions

export default gamefieldReduser.reducer