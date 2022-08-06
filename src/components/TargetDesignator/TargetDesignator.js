import React from 'react'
import {useSelector} from "react-redux";
import "./TargetDesignator.css"

function TargetDesignator() {
    let keyid = 0;
    const {path} = useSelector((state) => state.gamefield);
      // y: 0 - -1 влево, 1 - +1 вправо, x: 2 - -1 вверх, 3: +1 вниз
      console.log(path)
        const arrows = path.map((el)=> {
           return <span key={keyid++}>
            {el === 0 ? "влево" : 
           el === 1 ? "вправо" :
           el === 2 ? "вверх" :
           el === 3 ? "вниз" : 
           <span>el</span>}
           </span>;
        })
  return (
    <div className='TargetArrows'>{arrows}</div>
  )
}

export default TargetDesignator