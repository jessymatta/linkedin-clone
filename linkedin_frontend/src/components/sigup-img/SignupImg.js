import "./signup-img.css"
import signup_pic from "../../assets/signup_pic.PNG"

const SignupImg = () => {
    return (
        <div className="signup-img">
            <img src={signup_pic} alt="signup-main-img" />
        </div>
    )
}

export default SignupImg