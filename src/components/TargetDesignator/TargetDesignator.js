import React from 'react'
import {useSelector} from "react-redux";
import "./TargetDesignator.css"
import { useDispatch } from 'react-redux';
import {restartGame} from "../store/actionCreaters/restartGame";
import { motion,AnimatePresence } from "framer-motion";
import {getRandomInt} from "../store/actionCreaters/startGame";
import {useMemo} from "react";
import {variants} from "../animations/index";
import {ArrowUp,ArrowLeft, ArrowRight, arrowDown} from "../../img/index";


function TargetDesignator() {


    const dispatch = useDispatch();
    const {path, gameEnd, fieldSize,complexity} = useSelector((state) => state.gamefield);
      // y: 0 - -1 влево, 1 - +1 вправо, x: 2 - -1 вверх, 3: +1 вниз
      let keyid = useMemo(() => getRandomInt(10000), [path, gameEnd ]);
        const arrows = path.map((el, i)=> {
            return <motion.span className='arrows' key={keyid++}
            initial={"initial"}
            animate={"visible"}
            custom={i}
            variants={variants}
            >
            {el === 0 ? ArrowLeft : 
           el === 1 ? ArrowRight :
           el === 2 ? ArrowUp :
           el === 3 ? arrowDown : 
           <span>el</span>}
           </motion.span>
        });

        const restartButton = gameEnd === false ? null : <motion.div
            initial={"initial"}
            animate={"visible"}
            custom={5}
            variants={variants}
        ><button className='btn btn-dark' onClick={()=>  dispatch(restartGame(fieldSize,complexity))}>Restart</button></motion.div>
  return (
    <>
    <AnimatePresence>
    <motion.div className='TargetArrowsBox'

    >
    <div className='TargetArrows'>{arrows}</div>
    </motion.div>
    <div className='restartButton'>{restartButton}</div>
    </AnimatePresence>
    </>
  )
}

export default React.memo(TargetDesignator);