import React, { useState } from "react";
import './fruit.css'

export function Fruit() {
    const [fruit, setFruit] = useState(4)
    function Fruite() {

        setFruit(fruit + 1)
    }
    const [fruits, setFruits] = useState(5)
    function Fruitsout() {

        setFruits(fruits + 1)
    }


    return (
        <>
            <div className="container-fluid" id="HI">
                <div className="d-flex justify-content-center">
                    <div className="col-lg-5 bg-white p-5" id="bye">
                        <div className="row-center">
                            <h3><div className="col-12 text-center">Bob ate <a className="text-success">{fruit}</a> Mangoes <a className="text-warning">{fruits}</a> bannanas </div></h3>
                            <div className="row p-5">
                                <div className="col-lg-6 text-center mt-3">
                                    <button onClick={Fruite} className="bg-white ms-2" id="bor"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMNw8VomC7I0qcs4cK7n0SMUkeAq5dFTI9_g&usqp=CAU" width={150} /></button>
                                    <div onClick={Fruite} className="btn btn-success mt-3">ADD-Mangoes</div>
                                </div>
                                <div className="col-lg-6 text-center">
                                    <button onClick={Fruitsout} className="bg-white mt-2 ms-4" id="bore"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvLLELzFe5FR9ZyRddOviLMHDP26LUHdwGvA&usqp=CAU " width={105} /></button>
                                    <div onClick={Fruitsout} className="btn btn-warning mt-4 ms-4">ADD-Bannanas</div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
