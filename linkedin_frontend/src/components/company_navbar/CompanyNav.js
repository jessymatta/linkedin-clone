import "./companynav.css"
import small_logo from "../../assets/small_logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSuitcase } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const CompanyNav = () => {
    return (
        <div className="company_nav">
            <img className="small-logo" src={small_logo} alt="logo"/>
            <div className="actions">
            <FontAwesomeIcon className="sidebar-icon" icon={faSuitcase}/>
            <FontAwesomeIcon className="sidebar-icon" icon={faUser}/>
            <FontAwesomeIcon className="sidebar-icon" icon={faRightFromBracket}/>
            </div>
            
        </div>
    )
}

export default CompanyNav