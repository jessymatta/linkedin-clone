import "../signup-form-users/signup-form-users.css"
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const SignupFormCompanies = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [size, setSize] = useState("");
    const [type, setType] = useState("");
    const [tagline, setTagline] = useState("");
    const [logo, setLogo] = useState("");
    const navigate = useNavigate();


    const submitUser = async (e) => {
        e.preventDefault();

        const userObject = {
            name: name,
            email: email,
            password: password,
            size:size,
            type:type,
            tagline:tagline,
            logo_url:""
        }

        axios.post(`http://localhost:8000/auth/signup/company`, userObject).then((res) => {
            console.log(res.data);
        }).catch((error) => {
            console.log(error);
        })

    };

    const userSignup = () =>{
        navigate("/");
    }
    return (
        <div className="signup-form-users">
            <p className="signup-title">Join the biggest professional community</p>

            <form onSubmit={submitUser} className="signup-form">
                <label htmlFor="name">Organization Name</label>
                <input type="text" name="name" id="name" required="required" placeholder="Enter your organization's name"
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                    value={name} />

                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" required="required" placeholder="Enter your organization's email"
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                    value={email} />
                {/* Size */}
                <label for="size">Organization size</label>
                <select name="size" id="size" onChange={(e) => {
                    setSize(e.target.value);
                }}
                    value={size}>
                    <option selected="true" disabled="disabled">Select size</option>
                    <option>0-1 employees</option>
                    <option>2-10 employees</option>
                    <option>11-50 employees</option>
                    <option>51-200 employees</option>
                    <option>201-500 employees</option>
                    <option>501-1,000 employees</option>
                    <option>1,001-5,000 employees</option>
                    <option>5,001-10,000 employees</option>
                    <option>10,000+ employees</option>
                </select>
                {/* Type */}
                <label for="type">Organization type</label>
                <select name="type" id="type" onChange={(e) => {
                    setType(e.target.value);
                }}
                    value={type}>
                    <option selected="true" disabled="disabled">Select type</option>
                    <option>Public company</option>
                    <option>Self-employed</option>
                    <option>Government agency</option>
                    <option>Nonprofit</option>
                    <option>Sole proprietorship</option>
                    <option>Privetly Held</option>
                    <option>Partnership</option>
                </select>

                {/* Tagline */}
                <label htmlFor="tagline">Tagline</label>
                <input type="text" name="tagline" id="tagline" required="required" placeholder="ex: An information services firm helping small businesses succeed."
                    onChange={(e) => {
                        setTagline(e.target.value);
                    }}
                    value={tagline} />
                

                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" required="required" placeholder="Password (8+ characters)"
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                    value={password} />

                <div className="action-btns">
                    <button type="submit" className="submit-signup">Join</button>
                </div>
            </form>

            <div className="nav-to-other-forms">
                <p className="gray smaller-text">Already on LinkedIn? <span className="blue smaller-text">Sign in</span></p>
                <p onClick={userSignup} className="blue smaller-text">Personal account?</p>

            </div>

        </div>
    )
}

export default SignupFormCompanies