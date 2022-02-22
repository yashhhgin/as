import React from "react";
import {NavLink, useHistory} from "react-router-dom";

function Header({isLogin,changeAuthL,handleLogoutData}){

    const history = useHistory();

    function logout(){
        changeAuthL()
        handleLogoutData();
        localStorage.removeItem('is_l')
        localStorage.removeItem('data')
        history.replace('/');
    }

    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/" exact={true} activeStyle={{color:"red"}}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/picture" activeStyle={{color:"red"}}>List Of Picture</NavLink>
                </li>
                {
                    !isLogin ?  <li>
                                    <NavLink to="/login" activeStyle={{color:"red"}}>Login</NavLink>
                                </li> : <button onClick={logout}>Logout</button>
                }
            </ul>
        </nav>
    )
}

export default Header