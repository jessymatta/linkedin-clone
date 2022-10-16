import "./company_homepage.css"
import CompanyNav from "../../components/company_navbar/CompanyNav"
import CompanyProfile from "../../components/profile/CompanyProfile"

const CompanyHomepage = () => {
    return (
        <div className="company-homepage">
            <CompanyNav />
            <CompanyProfile logo_url={"../../assets/gray.png"} name={"com"} tagline={"current tagline"} location={"location"}/>
        </div>
    )
}

export default CompanyHomepage