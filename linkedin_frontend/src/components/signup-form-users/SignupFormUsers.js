import "./signup-form-users.css"
import { useState } from "react";
import axios from "axios";

const SignupFormUsers = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitUser = async (e) => {
        e.preventDefault();

        const userObject = {
            name:name,
            email:email,
            password:password
        }

        axios.post(`http://localhost:8000/auth/signup/personal`,userObject).then((res)=>{
            console.log(res.data);
        }).catch((error)=>{
            console.log(error);
        })

    };

    return (
        <div className="signup-form-users">
            <p className="signup-title">Join the biggest professional community</p>

            <form onSubmit={submitUser} className="signup-form">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" required="required" placeholder="Enter your name"
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                    value={name} />

                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" required="required" placeholder="Enter your email"
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                    value={email} />

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
                <p className="blue smaller-text">Company account?</p>

            </div>

        </div>
    )
}

export default SignupFormUsers


