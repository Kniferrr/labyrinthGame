import {ERROR,  endgame} from "../redusers/gamefieldReduser";

export const endGame = (id) => {
    return  (dispatch) => {
        const idx = {first: id[0], second: id[2]}
        try{
            dispatch(endgame(idx));
        }catch(e){
            dispatch(ERROR("Произошла ошибка при старте игры"));
        }
    }
};

