import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  fieldSize: {x: 3, y: 3},
    error: null,
    start: {first: 0, second: 0},
    end: {first: 0, second: 0},
    matrix: [],
    gameEnd: false,
    path: [],
    startPoint: null,
    endPoint: null,
    score: 0,
    complexity: 1,
}

export const gamefieldReduser = createSlice({
  name: 'gamefieldReduser',
  initialState,
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
        state.gameEnd = "Win";
        state.score++;
      }else{
        state.gameEnd = "Loss";
        state.score = 0;
      }
      },
      gameRestart: (state, action) => {
        return {...initialState, score: state.score, complexity: state.complexity, fieldSize: state.fieldSize};
      },
      Upcomplexity: (state, action) => {
        state.complexity = Number(action.payload);
      },
      chengefieldSize: (state, action) => {
        state.fieldSize = {x: Number(action.payload), y: Number(action.payload)};
      },
      delitematrix: (state, action) => {
        state.matrix = [];
      }, 
  },
})

// Action creators are generated for each case reducer function
export const { ERROR, setMatix,endgame,setPoint,setPath,setStartPoint,setEndPoint,gameRestart,Upcomplexity,chengefieldSize,delitematrix} = gamefieldReduser.actions

export default gamefieldReduser.reducer