import "./company_profile.css"
import gray from "../../assets/gray.png"

//props.name, props.tagline, props.tagline
const CompanyProfile = (props) => {
    return (
        <div className="profile">
            <div className="banner"></div>
            <img  className="pp" src={gray} alt="logo"/>
            <h3 className="welcome">Welcome, {props.name} !</h3>
            <h9 className="tagline">{props.tagline}</h9> <br/>
            <h9 className="location">{props.location}</h9>

        </div>
    )
}

export default CompanyProfile