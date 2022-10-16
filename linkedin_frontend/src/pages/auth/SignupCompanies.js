import "./signup.company.css";
import LogoNav from "../../components/logo_nav/LogoNav";
import SignupImg from "../../components/sigup-img/SignupImg";
import SignupFormCompanies from "../../components/signup-form-companies/SignupFormCompanies";

const SignupCompanies = () => {
    return (
        <div className="users-signup">
            <LogoNav />
            <div className="signup-section">
                <SignupFormCompanies />
                <SignupImg />
            </div>
        </div>
    )
}

export default SignupCompanies