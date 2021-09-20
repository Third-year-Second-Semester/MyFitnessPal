import React from 'react'
import Loader from "react-loader-spinner";
import  "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
export default function Spinner() {
    return (
        <div className="spinnerContainer">
                        <Loader type="Audio" color="#00BFFF" height={80} width={80} />
                        <br />
                        <h4>Loading...</h4>
        </div>
    )
}
