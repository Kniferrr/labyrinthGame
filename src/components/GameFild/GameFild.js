import React, { useEffect } from 'react';
import {useSelector} from "react-redux";
import {startGame} from "../store/actionCreaters/startGame";
import { useDispatch } from 'react-redux';
import "./GameFild.css"

function GameFild() {
    const {matrix} = useSelector((state) => state.gamefild);
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

export default GameFild;