import React from "react";
import './navbar.css'
import { Link } from "react-router-dom";
export function Navbar() {
    return (
        <>
            <nav class="navbar navbar-expand-lg" id="pech">
                <div class="container-fluid">
                    <a class="navbar-brand"><span id="an">Portfolio</span></a>
                    <button class="navbar-toggler" type="button" id="code" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <a class="nav-link"><Link to='/Home' id="mara">About </Link></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link"><Link to='/About' id="mara">Qualification</Link></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link"><Link to='/Certification' id="mara">Certification</Link></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link"><Link to='/Project' id="mara">Project</Link></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" ><Link to='/Contact' id="mara">Contact</Link></a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>



        </>
    )
}