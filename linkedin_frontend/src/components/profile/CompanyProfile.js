import "./company_profile.css"
import gray from "../../assets/gray.png"

//props.name, props.tagline, props.tagline
const CompanyProfile = (props) => {
    return (
        <div className="profile">
            <div className="banner"></div>
            <img  className="pp" src={gray} alt="logo"/>
            <h1 className="welcome">Welcome, {props.name} !</h1>
            <h1 className="tagline">{props.tagline}</h1> <br/>
            <h1 className="location">{props.location}</h1>

        </div>
    )
}

export default CompanyProfile