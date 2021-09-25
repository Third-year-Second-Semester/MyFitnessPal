import React from 'react'

export default function CButton(props){

    return(
        <button className="cancelButton"  onClick={(e)=>{
            e.preventDefault()
            if(props.emitFunc !== undefined){
               props.emitFunc()
            }
            
        }}  ><span className="buttonName"  >{props.name}</span></button>
    )
}