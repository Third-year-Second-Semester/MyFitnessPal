import React from "react";
import './meals.css'

export default function SingleViewItem(props){

    return(
        <div className="singleViewItem">
            <h2>{props.time}</h2>
            <br></br>
            <h6>{ props.desc}</h6>

        </div>
    )
}