import {startGame} from "./startGame";
import {ERROR,gameRestart,delitematrix} from "../redusers/gamefieldReduser";

export const restartGame = (fieldSize,complexity) => {
    return  (dispatch) => {
        try{
            dispatch(gameRestart());
            dispatch(startGame(fieldSize,complexity));
        }catch(e){
            dispatch(ERROR("Произошла ошибка при старте игры"));
        }
    }
};
