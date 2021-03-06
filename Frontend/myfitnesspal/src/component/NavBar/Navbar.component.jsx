import React from "react";
import SingleLink from "./singleLink";



export default function NavBar(){
    return(<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">

            <div className="navbar-brand " >My Fitenss Pal - Admin Dasboard </div>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                    <li className="nav-item">
                        <SingleLink name="Home" link="/"/>
                    </li>
                    <li className="nav-item">
                        <SingleLink name="Meal Plan" link="/adminmeals"/>
                    </li>
                    <li className="nav-item">
                        <SingleLink name="Instructors" link="/instructor"/>
                    </li>
                    <li className="nav-item">

                        <SingleLink name="Blogs" link="/adminbloglist"/>

                    </li>

                </ul>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>)

}