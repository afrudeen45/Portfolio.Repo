import React from "react";
import './certification.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate } from "@fortawesome/free-solid-svg-icons";
import certification1 from '../Coursera YXSQMVP7U8B2_page-0001.jpg'
import certification2 from '../Coursera VPGM292SZHD2_page-0001.jpg'
import certification3 from '../Coursera 6ZDZ7BFWLN9H_page-0001.jpg'
import certification4 from '../Coursera 36VHSUSEMPMF_page-0001.jpg'
export function Certification() {
    return (
        <>

            <div class="row p-5" id="Certification">
                <h1 className="text-center " id="certifi"><FontAwesomeIcon icon={faCertificate} flip/> Certification's</h1>
                <div class="col-lg-6 col-sm-12 d-flex justify-content-center certi">
                    <img src={certification1} className="" id="imgace" />
                </div>
                <div class="col-lg-6 col-sm-12 d-flex justify-content-center certi">
                    <img src={certification2} className=" " id="imgace"/>
                </div>
                <div className="row pt-2 ">
                    <div class="col-lg-6 col-sm-12 d-flex justify-content-center certi">
                        <img src={certification3} className="ms-2 " id="imgace"/>
                    </div>
                    <div class="col-lg-6  col-sm-12 d-flex justify-content-center certi">
                        <img src={certification4} className="ms-4 " id="imgace"/>
                    </div>
                </div>
            </div>

        </>
    )
}