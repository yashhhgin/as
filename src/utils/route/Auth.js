import React, {useContext} from "react";
import {Redirect, Route} from "react-router-dom";
import AppContext from './../../store/AppContext';

export default function Auth(props){

    const [loggedIn] = useContext(AppContext);

    if(loggedIn) return (<Route {...props} />)

    return (<Redirect to="/login" />);
}