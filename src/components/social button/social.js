import React from "react";
import './social.css'
export function Social(){
    return(
        <>
        <div className="container-fluid" id="ma">
            
            <h1 className="text-center text-white">Social Button</h1>
            <div className="d-flex justify-content-evenly p-5"> 
                <button className="btn btn-warning text-white">Like</button>
                <button className="btn btn-light text-black">comment</button>
                <button className="btn btn-primary text-white">share</button>
            </div>
        </div>
        </>
    )
}