import React, {useState} from "react";
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

        axios.post(`${process.env.REACT_APP_API}/login`,form)
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
                <div className="w-full my-6">
                    <input className="p-2 rounded shadow w-full text-black" placeholder="Email or Username" type="text" name="email" onChange={handelChange} value={form.email}/>
                </div>
                <div className="w-full my-6">
                    <input className="p-2 rounded shadow w-full text-black" placeholder="Email or Password" type="text" name="password" onChange={handelChange} value={form.password}/>
                </div>
                <button type="submit" className="p-2 rounded shadow w-full bg-gradient-to-tr from-yellow-600 to-yellow-400 text-black">Login</button>
            </form>
        </div>
    )
}

export default Login