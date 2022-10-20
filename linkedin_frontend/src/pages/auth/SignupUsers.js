import "./signup.users.css";
import LogoNav from "../../components/logo_nav/LogoNav";
import SignupImg from "../../components/sigup-img/SignupImg";
import SignupFormUsers from "../../components/signup-form-users/SignupFormUsers";

const SignupUsers = () => {
    return (
        <div className="users-signup">
            <LogoNav/>
            <div className="signup-section">
            <SignupFormUsers/>
            <SignupImg/>
            </div>
        </div>
    )
}

export default SignupUsers