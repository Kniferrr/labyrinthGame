import React from 'react'
import {useSelector} from "react-redux";

function TargetDesignator() {
    const {path} = useSelector((state) => state.gamefield);
      // y: 0 - -1 влево, 1 - +1 вправо, x: 2 - -1 вверх, 3: +1 вниз
      console.log(path)
        const arrows = path.map((el)=>{
           return el === 0 ? <h2>влево</h2> : 
           el === 1 ? <h2>вправо</h2> :
           el === 2 ? <h2>вверх</h2> :
           el === 3 ? <h2>вниз</h2> : <span>el</span>;
        })
  return (
    <div>{arrows}</div>
  )
}

export default TargetDesignator