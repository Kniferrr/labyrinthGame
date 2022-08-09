import React, { useEffect } from 'react';
import {useSelector} from "react-redux";
import {restartGame} from "../store/actionCreaters/restartGame";
import { useDispatch } from 'react-redux';
import "./GameField.css";
import {endGame} from "../store/actionCreaters/endGame";
import { motion,AnimatePresence } from "framer-motion";
import {variants} from "../animations/index";
import {getRandomInt} from "../store/actionCreaters/startGame";
import {useMemo} from "react";

function GameField() {
    const {matrix,fieldSize,gameEnd,startPoint,complexity,path} = useSelector((state) => state.gamefield);
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(restartGame(fieldSize,complexity));
    }, []);
    
    const Examination = (e) => {
      dispatch(endGame(e.target.id))
    };
    
    let keyid = useMemo(() => getRandomInt(10000), [ path, gameEnd ]);
    const Board = matrix.map((el)=> 
    <AnimatePresence>
    <motion.div key={keyid++} className="matrixRow"
            initial={"initial"}
            animate={"visible"}
            custom={5}
            variants={variants}
    > 
    {el.map((el)=> <span key={`${el.first},${el.second}`} id={[el.first,el.second]} className="matrixCell" onClick={Examination}>
      {startPoint.first === el.first && startPoint.second === el.second ? <span className='startPoint'>start</span>: <span></span>}
    </span>)} 
    </motion.div></AnimatePresence>)
    
    if(gameEnd !== false){
      return <motion.h1
      initial={"initial"}
            animate={"visible"}
            custom={0.5}
            variants={variants}
      >{gameEnd}</motion.h1>
    };
    

  return (
    <div className='GameField'>
        {Board}
    </div>
  )
}

export default GameField;