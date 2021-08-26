/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import './navabr.css'
import { Link} from "react-router-dom";
const SingleLink = (props)=>{
    return(

        <div className={"cusLink"}>
          <Link to={props.link}>
          <div  aria-current="page"   >{props.name}</div>
          </Link>
            
       
            

        </div>

    )
}

export default SingleLink