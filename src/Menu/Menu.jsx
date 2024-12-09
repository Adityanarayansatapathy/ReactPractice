import React from "react";
import { useState } from "react"
import { menu } from './menu.css';

export function SideMenu() {
    let [menuStatus, setMenuStatus] = useState(false);
    let [modalStatus, setModalStatus] = useState(false);
    let [regStatus, setRegStatus] = useState(false);
    return (
        <div>
            <div className={`sideBar ${menuStatus ? "slide" : ""}`}>
                <div>
                    <ul>
                        <li><a href="#">About</a></li>
                        <li>Gallery</li>
                        <li>Forms</li>
                        <li>Contact us</li>
                        <li>Login</li>
                    </ul>
                </div>
            </div>
            <button class="menuButton" onClick={() => setMenuStatus(!menuStatus)}>&#9776;</button>
            <button class="popupButton" onClick={() => setModalStatus(!modalStatus)}>Login</button>
            <button class="regButton" onClick={() => setRegStatus(!regStatus)}>Registration</button>
            <Login modalStatus={modalStatus} setModalStatus={setModalStatus} />
            <Registration regStatus={regStatus} setRegStatus={setRegStatus} />
        </div>
    )
}

function Login({ modalStatus, setModalStatus }) {
    return (
        <div className={`modalOverLay ${modalStatus ? 'showModal' : ''}`}>
            <button className="closeButton" onClick={() => setModalStatus(!modalStatus)} >&times;</button>
            <div className="modalDesign">
                <h4>Login</h4>
                <label>User Name</label><br />
                <input type="text" /><br />
                <label>Password</label><br />
                <input type="password" /><br />
                <button type="submit" >Submit</button><br />
            </div>
        </div>
    )
}
function Registration({ regStatus, setRegStatus }) {
    return (
        <div>
            <div className={`modalOverLay ${ regStatus ? 'showModal' : ''}`}>
            {/* <button className="searchButton" onClick={() => setRegStatus(!regStatus)} >&#x1F50D;</button> */}
                <div className="regDesign">
                    <h4>Registration</h4>
                    <label>User Name</label><br />
                    <input type="text" /><br />
                    <label>Email</label><br />
                    <input type="text" /><br />
                    <label>Password</label><br />
                    <input type="password" /><br />
                    <button type="submit" >Submit</button><br />
                </div>
            </div>

        </div>
    )
}


   {/* <h1>Frequently Asked Questions:-</h1> */}
                {/* <button className="regButton" onClick={() => setRegStatus(!regStatus)}></button> */}