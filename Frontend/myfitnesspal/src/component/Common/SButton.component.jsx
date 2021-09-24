import React from 'react'
import './common.css'

export default function Button(props){
    return(
         <button className="successButton" ><span className="buttonName" onClick={(e)=>{
             e.preventDefault()
             if(props.emitFunc !== undefined){
                props.emitFunc()
             }
             
         }} type="submit" >{props.name}</span></button>
   )
}