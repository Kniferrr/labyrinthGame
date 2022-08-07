import React from 'react';
import {useSelector} from "react-redux";
import "./Header.css";
import {Upcomplexity} from "../store/redusers/gamefieldReduser";
import { useDispatch } from 'react-redux';
import {ChangeField} from "../store/actionCreaters/ChangeField";
import {restartGame} from "../store/actionCreaters/restartGame"


function Header() {
    const dispatch = useDispatch();
    const {score,fieldSize,complexity} = useSelector((state) => state.gamefield);
    const onChangeComplexity = (e) =>{
        e.preventDefault();
        dispatch(Upcomplexity(e.target.value))
      }
      const onChangeField = (e) =>{
        e.preventDefault();
        dispatch(ChangeField(e,fieldSize,complexity))
      }
      const OkButton = (e)=>{
        e.preventDefault();
        dispatch(restartGame(fieldSize,complexity));
      }
  return (
    <>
    <div className='HeaderForm'>
    <form action="/my-handling-form-page" method="post">
    <span className='complexityBox'>
    <label>complexity:</label>
    <select className="complexity" name="complexity" onChange={onChangeComplexity}>
				<option value="1">1</option>
				<option value="2">2</option>
				<option value="3">3</option>
				<option value="4">4</option>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
			</select>
            </span>
            <span className='fild_Size_box'>
            <label>fild Size:</label>
            <select className='fild_Size' name="fild Size" onChange={onChangeField}>
				        <option value="3">3</option>
				        <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="10">10</option>
                <option value="20">20</option>
			</select>
            </span>
    <button onClick={OkButton} className="btn btn-dark HederFormOKButton">OK</button>
  </form>

    </div>
    <div className='Score'>Score - {score}</div>
    </>
  )
}

export default Header