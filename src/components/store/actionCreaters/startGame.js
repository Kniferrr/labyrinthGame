import {ERROR,  setMatix,setStartPoint,setEndPoint,setPath} from "../redusers/gamefieldReduser";

export const startGame = (fieldSize) => {
    return  (dispatch) => {
        const newposition = generateStartPosition(fieldSize);
        const positionEndFuncResult = generateEndPosition(fieldSize,newposition);
        const {positionStart,path} = positionEndFuncResult;
        const matrix = createMatrix(fieldSize);
        console.log(positionStart)
        try{
            dispatch(setMatix(matrix));
            dispatch(setPath(path));
            dispatch(setStartPoint(newposition));
            dispatch(setEndPoint(positionStart));
        }catch(e){
            dispatch(ERROR("Произошла ошибка при старте игры"));
        }
    }
};



const createMatrix = (fieldSize) => {
    let matrix = [];
    let numrowMatrix = 0;
    let numMatrix = 0;
    for(let i = 0; i < fieldSize.x; i++){
        let rowmatrix = [];
        for(let j = 0; j < fieldSize.y; j++){
        rowmatrix[numrowMatrix++] = {first: i, second: j};
        }
        matrix[numMatrix++] = rowmatrix;
        rowmatrix = [];
    }
    return matrix;
};

const generateStartPosition = (fieldSize) =>{
    
    return {first: getRandomInt(fieldSize.x), second: getRandomInt(fieldSize.y)};

};

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  };

  const generateEndPosition = (fieldSize,positionStarts) =>{
    let path = [];
    let positionStart = {first: positionStarts.first, second: positionStarts.second};
    // y: 0 - -1 влево, 1 - +1 вправо, x: 2 - -1 вверх, 3: +1 вниз
    for(let i = 0; i < fieldSize.x; i++){
        const rnd = getRandomInt(fieldSize.x+1);
        let num = -100;
        if(rnd === 2){
            num = -1;
        }else if (rnd === 3){
            num = 1;
        }
        if(positionStart.first + num >= 0 && positionStart.first + num <= fieldSize.x - 1){
            path.push(rnd)
           positionStart.first = positionStart.first + num;
        }

        const rnd2 = getRandomInt(fieldSize.y+1);
        console.log(`rnd2 - ${rnd2}`)
        let num2 = -100;
        if(rnd2 === 0){
            num2 = -1;
        }else if (rnd2 === 1){
            num2 = 1;
        }
        if(positionStart.second + num2 >= 0 && positionStart.second + num2 <= fieldSize.y - 1){
            path.push(rnd2)
            positionStart.second = positionStart.second + num2;
        }

        if(path.length <= 1){
            i = 0;
        };  
    };
    return {positionStart, path };
    
};
