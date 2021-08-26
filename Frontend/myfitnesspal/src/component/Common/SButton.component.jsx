import React from 'react'
import './common.css'

export default function Button(props){
    return(
         <button className="successButton" ><span className="buttonName" onClick={(e)=>{
             e.preventDefault()
             props.emitFunc()
         }} >{props.name}</span></button>
   )
}