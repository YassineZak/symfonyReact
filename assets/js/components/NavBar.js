// assets/js/components/NavBar.js

import React from 'react';
import {Link, withRouter} from 'react-router-dom';


function NavBar(props) {


    return(
        <nav>
                <ul>
                    <li >
                        <Link className={"nav-link"} to={"/"}>PARIMIS</Link>
                    </li>
                    <li>
                        <Link className={"nav-link"} to={"/chambre"}>Chambres</Link>
                    </li>
                    <li>
                        <Link className={"nav-link"} to={"/restaurant"}>Restaurant</Link>
                    </li>
                    <li>
                        <Link className={"nav-link"} to={"/spa"}>Bien être</Link>
                    </li>
                    <li>
                        <Link className={"nav-link"} to={"/avis"}>Avis</Link>
                    </li>
                    <li>
                    <Link className={"nav-link"} to={"/reservation"}>Reservation</Link>
                    </li>
                </ul>
        </nav>
    )
}
export default withRouter(NavBar);