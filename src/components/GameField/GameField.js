import React, { useEffect } from 'react';
import {useSelector} from "react-redux";
import {startGame} from "../store/actionCreaters/startGame";
import { useDispatch } from 'react-redux';
import "./GameField.css"

function GameField() {
    const {matrix} = useSelector((state) => state.gamefield);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(startGame());
    }, [])
    console.log(matrix)
    
    const Board = matrix.map((el)=> <div key={el} className="matrixRow"> {el.map((el)=> <span key={`${el.first},${el.second}`} className="matrixCell"></span>)} </div>)
    
    

  return (
    <div className='GameField'>
        {Board}
    </div>
  )
}

export default GameField;