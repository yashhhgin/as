import React, {useContext} from "react";
import {NavLink, useHistory} from "react-router-dom";
import AppContext from "../store/AppContext";

function Header({isLogin,changeAuthL,handleLogoutData}){

    const history = useHistory();

    const [_,user] = useContext(AppContext);

    function logout(){
        changeAuthL()
        handleLogoutData();
        localStorage.removeItem('is_l')
        localStorage.removeItem('data')
        history.replace('/');
    }

    return (
        <nav className="py-5 bg-gray-900 text-white flex justify-between">
            <ul className="flex justify-between px-10">
                <li className="mr-5">
                    <NavLink to="/" exact={true} activeStyle={{color:"red"}}>Home</NavLink>
                </li>
                <li className="mr-5">
                    <NavLink to="/picture" activeStyle={{color:"red"}}>List Of Picture</NavLink>
                </li>
            </ul>
            <ul className="flex justify-between px-10">
                {
                    isLogin ? <li className="mr-5">
                        { user.email }
                    </li> : null
                }
                {
                    !isLogin ?  <li className="mr-5">
                                    <NavLink to="/login" activeStyle={{color:"red"}}>Login</NavLink>
                                </li> : <button className="p-1 ml-1 text-white bg-red-500" onClick={logout}>Logout</button>
                }
            </ul>
        </nav>
    )
}

export default Header