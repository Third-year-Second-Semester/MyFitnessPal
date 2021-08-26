import React from 'react'

export default function CButton(props){

    return(
        <button className="cancelButton" ><span className="buttonName">{props.name}</span></button>
    )
}