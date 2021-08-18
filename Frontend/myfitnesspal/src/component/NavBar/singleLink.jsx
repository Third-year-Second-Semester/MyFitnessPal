import React from "react";
import './navabr.css'
import { Link} from "react-router-dom";
const SingleLink = (props)=>{
    return(

        <div className={"cusLink"}>
          <Link to={props.link}>
          <a   aria-current="page" href >{props.name}</a>
          </Link>
            
       
            

        </div>

    )
}

export default SingleLink