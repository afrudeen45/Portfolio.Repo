import React, { useState } from "react";

export function Hooks() {
   
    const[count,setCount]=useState(0)
   
    return (
        <>
        <h1 className="text-center text-info mt-4">{count}</h1>
        <div className="container-fluid d-flex justify-content-evenly mt-5">
            <button type="button" class="btn btn-primary" onClick={()=>{setCount(count+1)}}>Add</button>
            <button type="button" class="btn btn-secondary" onClick={()=>{setCount(count*0)}}>Reset</button>
            <button type="button" class="btn btn-success" onClick={()=>{setCount(count-1)}}>Substract</button>
            </div>
        </>
    )
}
