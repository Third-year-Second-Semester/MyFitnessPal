import React from "react";
import "./instrucUser.css";


export default function InstructorListItem(props) {


    const handleNavigate = async ()=>{
        try{
            window.location = `/instructorView/${props.itemId}`
        }catch(err){
          console.log(err)
        }
    }


    return (
        <div className="instListItemContainer">
            <div className="row">
                <div className="col-sm-5 ">
                    <img
                        className="instListImgHolder"
                        src={props.img}
                        alt=""
                    />
                </div>
                <div className="col-sm">
                    <h3 className="ilistTitle">{props.name}</h3>
                    <h5>{props.category}</h5>
                    <div className="iItemDesc">
                        <p>
                            {props.introduction}
                        </p>

                        <button className="moreBut" emitFunc={handleNavigate}>Read More</button>
                    </div>

                </div>
            </div>
        </div>
    );
}
