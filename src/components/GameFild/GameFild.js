import React, { useEffect } from 'react';
import {useSelector} from "react-redux";
import {startGame} from "../store/actionCreaters/startGame";
import { useDispatch } from 'react-redux';
import "./GameFild.css"

function GameFild() {
    const {start,matrix} = useSelector((state) => state.gamefild);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(startGame());
    }, [])
    console.log(matrix)
    
    const Board = matrix.map((el)=> <div key={el} className="matrixRow"> {el.map((el)=> <span key={`${el.first},${el.second}`} className="matrixRow">1</span>)} </div>)
    
    

  return (
    <div className='gameFild'>
        {Board}
    </div>
  )
}

export default GameFild