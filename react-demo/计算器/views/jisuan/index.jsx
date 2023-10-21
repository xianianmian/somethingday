import React, { Component } from 'react';
import "./Jisuan.css"
import { useState,useReducer } from 'react';

const Jisuan = ()=>{

  const [daan, dispatchDaan] = useReducer((state, action) => {
    const { str, type } = action;

    if (type === 'DEL') {
      if (state === '' || state === '0') {
        return '0';
      } else {
        return state.slice(0, -1) || '0';
      }
    }else if (type === 'AC') {
      return '0';
    } else if (type === 'jisuan') {
      if(state.includes("√")){
        state = state.substr(1,state.length-1)
        console.log(state);
        return eval(Math.sqrt(state))
      }else{
        return eval(state)
      }
    }  else {
      if (state === '0') {
        return str;
      } else {
        return state + str;
      }
    }
  }, '0');

  return (
    <div className="container">
    <div className="output">{daan}</div>
    <button className="buttonOfAD"  id="clear" onClick={()=>dispatchDaan({ type:'AC' })}>AC</button>
    <button className="buttonOfAD" onClick={()=>dispatchDaan({ type:'DEL' })}>DEL</button>
    <button className="buttonOfOperation" onClick={()=>dispatchDaan({ str:'%' })}>%</button>
    <button className="buttonOfOperation" onClick={() => dispatchDaan({ str: '√' })}>√</button>
    <button className="button" onClick={()=>dispatchDaan({ str:'7' })}>7</button>
    <button className="button" onClick={()=>dispatchDaan({ str:'8' })}>8</button>
    <button className="button"  onClick={()=>dispatchDaan({ str:'9' })}>9</button>
    <button className="buttonOfOperation" onClick={()=>dispatchDaan({ str:'/' })}>/</button>
    <button className="button" onClick={()=>dispatchDaan({ str:'4' })}>4</button>
    <button className="button" onClick={()=>dispatchDaan({ str:'5' })}>5</button>
    <button className="button"onClick={()=>dispatchDaan({ str:'6' })}>6</button>
    <button className="buttonOfOperation" onClick={()=>dispatchDaan({ str:'*' })}>*</button>
    <button className="button" onClick={()=>dispatchDaan({ str:'1' })}>1</button>
    <button className="button" onClick={()=>dispatchDaan({ str:'2' })}>2</button>
    <button className="button" onClick={()=>dispatchDaan({ str:'3' })}>3</button>
    <button className="buttonOfOperation" onClick={()=>dispatchDaan({ str:'-' })}>-</button>
    <button className="button" onClick={()=>dispatchDaan({ str:'.' })} >.</button>
    <button className="button" onClick={()=>dispatchDaan({ str:'0' })} >0</button>
    <button className="button equals" onClick={()=>dispatchDaan({ type:'jisuan' })} >=</button>
    <button className="buttonOfOperation" onClick={()=>dispatchDaan({ str:'+' })} >+</button>
  </div>
  )
}

export default Jisuan