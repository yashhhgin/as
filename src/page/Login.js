import React, {useEffect, useState} from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";

function Login({changeAuth,handleLoginData}){

    const [form,setForm] = useState({email:"yash@gmail.com",password:"password"});

    const history = useHistory();

    function handleStatus(status,data){
        localStorage.setItem('is_l',true);
        localStorage.setItem('data', JSON.stringify(data));

        changeAuth(true);
        handleLoginData({...data});

        if(status){
            history.replace('/');
        }
    }

    function handelSubmit(e){
        e.preventDefault();

        axios.post(process.env.REACT_APP_API,form)
            .then(res => {
                res.data.data.length != 0
                    ? handleStatus(true,res.data.data)
                    : handleStatus(false,{})
            })
            .catch((e) => {
                console.log(e)
            })
    }

    function handelChange(e){
        setForm({...form,[e.target.name]:e.target.value})
    }

    return (
        <div>
            <form onSubmit={handelSubmit}>
                <input type="text" name="email" onChange={handelChange} value={form.email}/>
                <input type="text" name="password" onChange={handelChange} value={form.password}/>
                <input type="submit" />
            </form>
        </div>
    )
}

export default Login