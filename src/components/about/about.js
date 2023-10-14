import React from "react";
import './about.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons"; 
export function About() {
    return (
        <>
            <div class="row p-5" id="about1">
            <h1 className="text-center" id="edu"><FontAwesomeIcon icon={faBookmark} bounce/> Education</h1>
                <div class="col-sm-12 col-lg-4">
                
                    <div class="card" id="ABout">
                        
                        <div class="card-body mt-3">
                            <h3 class="card-title text-center" id="font1">SSLC-64%</h3>
                            <h6 class="card-title text-center" id="font1">2014-2016</h6>
                            <p class="card-text text-center" id="font1">Dr.Radhakrishnan Govt Boys Higher Secondary School.</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-lg-4">
                    <div class="card" id="ABout">
                        <div class="card-body">
                            <h3 class="card-title mt-3 text-center" id="font1">HSE-83%</h3>
                            <h6 class="card-title text-center" id="font1">2017-2018</h6>
                            <p class="card-text text-center" id="font1">Dr.Radhakrishnan Govt Boys Higher Secondary School.</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-lg-4">
                    <div class="card" id="ABout">
                        <div class="card-body mt-3">
                            <h3 class="card-title text-center" id="font1">B.COM-69%</h3>
                            <h6 class="card-title text-center" id="font1">2020-2023</h6>
                            <p class="card-text text-center" id="font1">Rathinam College of Arts and Science. <br></br>coimbatore</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}