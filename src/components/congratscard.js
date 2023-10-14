import React from "react";
import './card.css'
export function CongratsCard(){
    return(
        <>
        <div className="container-fluid" id="mai">
            <h1 className="text-center">Congratulation</h1>
                <div className="text-center bg-info col-lg-4 mx-auto p-5">
                    <img src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"></img>
                    <h1>Shahid Afrudeen</h1>
                    <p>Iam Front-End Developer</p>
                    <img src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"></img>

                </div>
            
        </div>
        </>
    )
}