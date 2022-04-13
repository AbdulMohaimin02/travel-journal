import React from "react";
import "./Header.css"
import globe from "../images/globe.png"


export default function Header(){
    return(
        <div className="header">
            <img src={globe} alt="globe" className="globe" />
            <h2 className="header-heading">my travel journal</h2>
        </div>
    )
}