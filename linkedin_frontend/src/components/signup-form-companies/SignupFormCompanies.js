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
    const [logo_url, setLogo] = useState("");
    const navigate = useNavigate();


    const submitUser = async (e) => {
        e.preventDefault();

        const userObject = {
            name: name,
            email: email,
            password: password,
            size: size,
            type: type,
            tagline: tagline,
            logo_url: logo_url
        }

        axios.post(`http://localhost:8000/auth/signup/company`, userObject
        ).then((res) => {
            console.log(res.data);
            navigate("/company");
        }).catch((error) => {
            console.log(error);
        })

    };

    const userSignup = () => {
        navigate("/");
    }

    const convertImage = (e) => {
        let image_file = e.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(image_file);

        reader.onload = (e) => {
            let image_url = e.target.result;
            setLogo(image_url.split(',')[1])
        }
    }

    const Login = () => {
        navigate("/login");
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
                <label htmlFor="size">Organization size</label>
                <select name="size" id="size" onChange={(e) => {
                    setSize(e.target.value);
                }}
                    value={size}>
                    <option value="DEFAULT" disabled="disabled">Select size</option>
                    <option value="11">0-1 employees</option>
                    <option value="22">2-10 employees</option>
                    <option value="33">11-50 employees</option>
                    <option value="44">51-200 employees</option>
                    <option value="55">201-500 employees</option>
                    <option value="66">501-1,000 employees</option>
                    <option value="77">1,001-5,000 employees</option>
                    <option value="88">5,001-10,000 employees</option>
                    <option value="99">10,000+ employees</option>
                </select>
                {/* Type */}
                <label htmlFor="type">Organization type</label>
                <select name="type" id="type" onChange={(e) => {
                    setType(e.target.value);
                }}
                    value={type}>
                    <option value="DEFAULT" disabled="disabled">Select type</option>
                    <option value="1">Public company</option>
                    <option value="2">Self-employed</option>
                    <option value="3">Government agency</option>
                    <option value="4">Nonprofit</option>
                    <option value="5">Sole proprietorship</option>
                    <option value="6">Privetly Held</option>
                    <option value="7">Partnership</option>
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
                <label className="upload_logo_label" htmlFor="logo">Upload Logo</label>
                <input onChange={convertImage} className="upload_logo" type="file" id="logo_url" accept=".jpg, .jpeg, .png"></input>
            </form>

            <div className="nav-to-other-forms">
                <p className="gray smaller-text">Already on LinkedIn? <span className="blue smaller-text" onClick={Login}>Sign in</span></p>
                <p onClick={userSignup} className="blue smaller-text">Personal account?</p>

            </div>

        </div>
    )
}

export default SignupFormCompanies