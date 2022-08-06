import {ERROR,} from "../redusers/gamefieldReduser";
import {chengefieldSize} from "../redusers/gamefieldReduser";
import {restartGame} from "./restartGame";

export const ChangeField = (e) => {
    return  (dispatch) => {
        try{
            dispatch(chengefieldSize(e.target.value));
        }catch(e){
            dispatch(ERROR("Произошла ошибка при старте игры"));
        }
    }
};
