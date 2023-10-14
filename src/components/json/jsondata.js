import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";

export function Jsondata() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(response => response.json())
            .then(viewdata => setData(viewdata))
    })

    return (
        <>
            <h1 className="text-center bg-warning mt-3">Products</h1>


            <div className="container-fluid row">

                {
                    data.map((value, index) => (
                        <>

                            <div className="card col-lg-4 mt-3">
                                <Link to={`/Product/${value.id}`}><img src={value.image} class="card-img-top"></img></Link>
                                <div className="card-body bg-black">
                                    <h5 className="card-title text-white">{value.title}</h5>
                                    <p className="card-text text-white">{value.description}</p>
                                    <StarRatings rating={value.rating.rate} starRatedColor="orange" /> <br /><br />
                                    <Link to={`/Product/${value.id}`}><p className="btn btn-primary">View</p></Link>
                                </div>
                            </div>



                        </>
                    ))
                }


            </div>

        </>
    )
}