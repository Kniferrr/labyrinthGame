import React from 'react'
import {useSelector} from "react-redux";

function TargetDesignator() {
    const {path} = useSelector((state) => state.gamefield);
      // y: 0 - -1 влево, 1 - +1 вправо, x: 2 - -1 вверх, 3: +1 вниз
      
  return (
    <div>TargetDesignator</div>
  )
}

export default TargetDesignator