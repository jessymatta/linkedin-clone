import "./company_homepage.css"
import CompanyNav from "../../components/company_navbar/CompanyNav"
import CompanyProfile from "../../components/profile/CompanyProfile"
import Jobs from "../../components/jobs/Jobs"
import gray from "../../assets/gray.png"

const CompanyHomepage = () => {
    return (
        <div className="company-homepage">
            <CompanyNav />
            <div className="company-homepage-elts">
                <CompanyProfile logo_url={"../../assets/gray.png"} name={"com"} tagline={"current tagline"} location={"location"} />
                <Jobs logo_url={gray} />
            </div>
        </div>
    )
}

export default CompanyHomepage