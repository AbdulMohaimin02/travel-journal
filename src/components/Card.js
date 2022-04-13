import React from "react";
import "./Card.css"
import marker from "../images/map-marker.png"


export default function Card(props){
    return(

        <div>
            <div className="card">
            <img src={props.imageUrl} alt={props.location} className="card-image" />
            <div className="info">

                <div className="topline">
                    <img src={marker} alt="marker" className="marker" />
                    <p className="country">{props.location}</p>
                    <a href="" className="link">View on Google Maps</a>
                </div>

                <h2 className="title">{props.title}</h2>


                <p className="date">{props.startDate}- {props.endDate}</p>

                <p className="info-text">{props.description}</p>

                
            </div>

            </div>
            <hr size="1" width="85%" color="lightgray" />
        </div>
    );
}