import React, { useState, useEffect, useRef } from "react";
import "./login.css";
import LogoNav from "../../../components/logo_nav/LogoNav";

import axios from "axios";
import { useNavigate } from "react-router-dom";
function Login() {
    const userRef = useRef();


    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [user_type, setUserType] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        userRef.current.focus();
    }, []);


    const login = async (e) => {
        e.preventDefault();

        const userObject = {
            email: user,
            password: password,
        }

        const type = user_type;
        if (type === "Personal") {
            //login for users
            axios.post(`http://localhost:8000/auth/login/personal`, userObject).then((res) => {
                console.log(res.data);
                localStorage.setItem("token", res.data);
                //naviagte
            }).catch((error) => {
                console.log(error);
            })
        }

        else {
            //login for companies
            axios.post(`http://localhost:8000/auth/login/company`, userObject).then((res) => {
                localStorage.setItem("token",res.data.token);
                localStorage.setItem("id",res.data.id);
                navigate("/company");
            }).catch((error) => {
                console.log(error);
            })
        }

    };

    const goToSignup = () => {
        navigate("/");
    }

    return (
        <>
            <LogoNav />
            <div className="login-page">

                <section>
                    <h1>Sign in</h1>
                    <p className="small-text">Stay tuned on your professional world</p>
                    <form onSubmit={login}>
                        {/* Username input */}
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            name="email"
                            id="email"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => {
                                setUser(e.target.value);
                            }}
                            value={user}
                            required
                            placeholder="Enter your email"
                        />

                        {/* Password input */}
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                            value={password}
                            required
                            placeholder="Enter your password"
                        />

                        {/* User Type */}
                        <label htmlFor="user_type">Select account type</label>
                        <select name="user_type" id="user_type" onChange={(e) => {
                            setUserType(e.target.value);
                        }}
                            value={user_type}>
                            <option value="DEFAULT" disabled="disabled">Select type</option>
                            <option>Personal</option>
                            <option>Company</option>
                        </select>

                        {/*Login button */}
                        <button>Sign in </button>
                        <p className="gray smaller-text">New to LinkedIn? <span className="blue smaller-text" onClick={goToSignup}>Join now</span></p>
                    </form>
                </section>
            </div>
        </>
    )
}

export default Login;
