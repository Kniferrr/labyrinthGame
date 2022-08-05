import {ERROR,  endgame} from "../redusers/gamefieldReduser";

export const endGame = (id) => {
    return  (dispatch) => {
        console.log(id)
        try{
            dispatch(endgame());
        }catch(e){
            dispatch(ERROR("Произошла ошибка при старте игры"));
        }
    }
};



const checkWin = (fieldSize) => {
  
};
