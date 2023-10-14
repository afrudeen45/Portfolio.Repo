import React from "react";
import './feedback.css'
import {Link} from 'react-router-dom'
export function Feedbackmain(){
    return (
        <>
        <div className="container-fluid" id="FBBODY">
        <div className="d-flex justify-content-center pt-5">
            <div className="col-lg-5 bg-white p-5" id="FEEDMT">
                <div className="row-center">
                    <div className="col-12">How satisfied are you with our customer support performance?</div>
                    <div className="row">
                    <div className="col-4">
                    <Link to='/FeedBack1'><img src="https://freepngimg.com/save/36860-sad-emoji-transparent-image/480x480" className="w-50 mt-5 ms-5"/></Link>
                    </div>
                    <div className="col-4">
                    <Link to='/FeedBack1'><img src="https://freepngimg.com/save/36885-sad-emoji-photos/433x470" className="w-50 mt-5 ms-4"/></Link>
                    </div>
                    <div className="col-4">
                    <Link to='/FeedBack1'><img src="https://i.pinimg.com/474x/ec/a6/ca/eca6ca47d417606701dffd4b95464555.jpg" className="w-50 mt-5"/></Link>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </> 
    );
}
