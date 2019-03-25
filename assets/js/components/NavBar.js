// assets/js/components/NavBar.js

import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import auth0Client from '../utils/Auth';


function NavBar(props) {

    const logOut = () => {
        auth0Client.logOut();
        props.history.replace('/');
    };

    return(
        <nav>
                <ul>
                    <li >
                        <Link className={"nav-link"} to={"/test"}>PARIMIS</Link>
                    </li>
                    <li>
                        <Link className={"nav-link"} to={"/"}>Chambres</Link>
                    </li>
                    <li>
                        <Link className={"nav-link"} to={"/"}>Restaurant</Link>
                    </li>
                    <li>
                        <Link className={"nav-link"} to={"/"}>Bien être</Link>
                    </li>
                    <li>
                        <Link className={"nav-link"} to={"/"}>Avis</Link>
                    </li>
                    <li>
                    <Link className={"nav-link"} to={"/"}>Reservation</Link>
                    </li>
                </ul>
        </nav>
    )
}
export default withRouter(NavBar);