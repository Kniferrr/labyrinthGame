import React from 'react'
import {useSelector} from "react-redux";
import "./TargetDesignator.css"
import { useDispatch } from 'react-redux';
import {restartGame} from "../store/actionCreaters/restartGame";


function TargetDesignator() {

    const dispatch = useDispatch();
    let keyid = 0;
    const {path, gameEnd, fieldSize,complexity} = useSelector((state) => state.gamefield);
      // y: 0 - -1 влево, 1 - +1 вправо, x: 2 - -1 вверх, 3: +1 вниз
        const arrows = path.map((el)=> {
           return <span className='arrows' key={keyid++}>
            {el === 0 ? "влево" : 
           el === 1 ? "вправо" :
           el === 2 ? "вверх" :
           el === 3 ? "вниз" : 
           <span>el</span>}
           </span>;
        });

        const restartButton = gameEnd === false ? null : <div><button className='btn btn-dark' onClick={()=>  dispatch(restartGame(fieldSize,complexity))}>Restart</button></div>
  return (
    <>
    <div className='TargetArrowsBox'>
    <div className='TargetArrows'>{arrows}</div>
    </div>
    <div className='restartButton'>{restartButton}</div>

    </>
  )
}

export default TargetDesignator