import React from "react";
import { Link } from 'react-router-dom'
import './menu.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHouse} from '@fortawesome/free-solid-svg-icons'
export function Menu() {
    return (
        <>

            <nav class="navbar navbar-expand-lg bg-info">
                <div class="container-fluid">
                    <a class="navbar-brand text-white"><FontAwesomeIcon icon={faHouse} flip size="2xl" /></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item" id="menu1">
                                <p class="nav-link "><Link to="/CongratsCard" id="MENUCOL">Card</Link></p>
                            </li>
                            <li class="nav-item" id="menu1">
                                <p class="nav-link" ><Link to="/League" id="MENUCOL">League</Link></p>
                            </li>
                            <li class="nav-item" id="menu1">
                                <p class="nav-link" ><Link to="/Social" id="MENUCOL">Social </Link></p>
                            </li>
                            <li class="nav-item" id="menu1">
                                <p class="nav-link" ><Link to="/Notification" id="MENUCOL">Notification</Link></p>
                            </li>
                            <li class="nav-item" id="menu1">
                                <p class="nav-link" ><Link to="/Login" id="MENUCOL">Login</Link></p>
                            </li>
                            <li class="nav-item" id="menu1">
                                <p class="nav-link" ><Link to="/Techcard" id="MENUCOL">Technology</Link></p>
                            </li>
                            <li class="nav-item" id="menu1">
                                <p class="nav-link" ><Link to="/feedbackmain" id="MENUCOL">App</Link></p>
                            </li>
                            <li class="nav-item" id="menu1">
                                <p class="nav-link" ><Link to="/Hook" id="MENUCOL">Hook</Link></p>
                            </li>
                            <li class="nav-item" id="menu1">
                                <p class="nav-link" ><Link to="/Fruit" id="MENUCOL">Counter</Link></p>
                            </li>
                            <li class="nav-item" id="menu1">
                                <p class="nav-link" ><Link to="/Date" id="MENUCOL">Date</Link></p>
                            </li>
                            <li class="nav-item" id="menu1">
                                <p class="nav-link" ><Link to="/Json" id="MENUCOL">Product</Link></p>
                            </li>
                            <li class="nav-item" id="menu1">
                                <p class="nav-link" ><Link to="/" id="MENUCOL">Portfolio</Link></p>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
