import {ERROR,  setMatix} from "../redusers/gamefildReduser";


export const startGame = () => {
    return  (dispatch) => {
        const matrix = createMatrix();
        try{
            dispatch(setMatix(matrix));
        }catch(e){
            dispatch(ERROR("Произошла ошибка при загрузке пользователей"));
        }
    }
};



const createMatrix = () => {
    let matrix = [];
    let numrowMatrix = 0;
    let numMatrix = 0;
    for(let i = 0; i < 9; i++){
        let rowmatrix = [];
        for(let j = 0; j < 9; j++){
        rowmatrix[numrowMatrix++] = {first: i, second: j};
        }
        matrix[numMatrix++] = rowmatrix;
        rowmatrix = [];
    }
    return matrix;
}
