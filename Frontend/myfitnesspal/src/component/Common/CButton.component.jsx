import React from 'react'

export default function CButton(props){

    return(
        <button className="cancelButton" ><span className="buttonName" onClick={(e)=>{
            e.preventDefault()
            props.emitFunc()
        }} >{props.name}</span></button>
    )
}