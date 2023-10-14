// import React from "react";
import { useState } from "react";
export function SDate() {
    const [College, SetCollege] = useState('')
    function DATECollege() {
        let a = document.getElementById("DATE").value;
        var todaydate = new Date(a)
        todaydate.setDate(todaydate.getDate() + 90)
        var output = `${todaydate.getDate()}-${todaydate.getMonth() + 1}-${todaydate.getFullYear()}`
        SetCollege(output)
    }
    return (
        <>
            <div className="text-center mt-5" id="Date1">
                <input type="Date" id="DATE" placeholder="ENTRY A COLLEGE DATE" />
                <div onClick={DATECollege} className="btn btn-primary">entry</div>
                <h1>{College}</h1>
            </div>
        </>
    );
}