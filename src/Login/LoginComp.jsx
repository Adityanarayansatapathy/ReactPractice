import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { HeaderComp } from "../NavData/Header/HeaderComp";
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




export function LoginComp(){
    let [uname,setUname] = useState('');
    let [password,setPassword] = useState('');
    const handleSubmit=(event)=>{
        event.preventDefault();
        console.log(uname, password);
        toast.success('Submit Successfully', {
            // position: toast.POSITION.BOTTOM_LEFT,
          });
        
    }
    const operationCancel=()=>{
        toast.warning('Login Cancelled', {
            // position: toast.POSITION.TOP_RIGHT,
          });
        setPassword('');
        setUname('');
    }
    return(
        <div>
            <HeaderComp />
            <div className="card" style={{ margin: '2%', padding: '5%' }}>
            <div className="card-header">Login Form</div>
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                <label>Username:</label>
                <input type="text" value={uname} onChange={(e)=>setUname(e.target.value)}   className="form-control"/>
                <label>Password:</label>
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value) }  className="form-control"/>
                <input type="submit" value="Login" className="btn btn-primary"/>
                <button type="button" className="btn btn-warning"   onClick={operationCancel}>Cancel</button>
                </form>
            </div>
        </div>
        <ToastContainer />
        </div>
    );
}