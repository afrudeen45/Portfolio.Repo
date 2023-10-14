import React from "react";
import './home.css'
import image from '../IMG_20220606_115635_Bokeh.jpg'
export function Home() {
    return (
        <>
            <div class="card p-5" id="bp">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src={image} class="img-fluid rounded-circle mt-5 ms-5" id="homeImage"/>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body mt-5">
                            <h1 class="card-title  " id="gr">I'am Shahid Afrudeen</h1>
                            <h2 class="card-title  ms-1" id="gr">Front-End Developer </h2>
                            <p class="card-text ms-1 mt-2" id="ob">I am seeking opportunities to join a company that can help me in
                                enhancing my skills, strengthening my knowledge and realising my
                                potential. I am willing to explore a wide variety of opportunities
                                that can help me gain perspective.
                            </p>
                            <a href="https://app.luminpdf.com/viewer/652a0b351ae30c39cf81c129" class="btn text-white" id="RESume">Resume</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}