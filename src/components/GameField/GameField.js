import React, { useEffect } from 'react';
import {useSelector} from "react-redux";
import {startGame} from "../store/actionCreaters/startGame";
import { useDispatch } from 'react-redux';
import "./GameField.css";
import {endGame} from "../store/actionCreaters/endGame"

function GameField() {
    const {matrix,fieldSize} = useSelector((state) => state.gamefield);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(startGame(fieldSize));
    }, [])
    
    const Examination = (e) => {
      dispatch(endGame(e.target.id))
    }
    
    const Board = matrix.map((el)=> 
    <div key={el} className="matrixRow"> 
    {el.map((el)=> <span key={`${el.first},${el.second}`} id={[el.first,el.second]} className="matrixCell" onClick={Examination}>
    </span>)} </div>)
    
    

  return (
    <div className='GameField'>
        {Board}
    </div>
  )
}

export default GameField;