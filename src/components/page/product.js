import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function Product() {
    const [product, setProduct] = useState([])
    var { id } = useParams()

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/" + id)
            .then(response => response.json())
            .then(viewproduct => setProduct(viewproduct))
    })

    return (
        <>
        <h1 className="mt-4 text-center bg-dark text-white">Products Details</h1>
            <div className="container-fluid row mt-5 d-flex justify-content-center">
                <div className="col-lg-3">
                    <img src={product.image} className="container-fluid" />
                </div>
                <div className="col-lg-3 bg-danger rounded">
                    <h1>Title: {product.title}</h1>
                    <p className="card-text text-white"> Description: {product.description}</p>
                    <p className="card-text text-white">Category: {product.category}</p>
                    <p className="card-text text-warning">Price: {product.price}</p>
                </div>
            </div>
        </>
    )
}
