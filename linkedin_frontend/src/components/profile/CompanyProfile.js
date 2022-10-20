import "./company_profile.css"
import gray from "../../assets/gray.png"
import axios from "axios";
import { useState, useEffect } from "react";
// import pic from "../../../../linkedin_server/microsoft@microsoft.png"

//props.name, props.tagline, props.tagline
const CompanyProfile = (props) => {
    const token = localStorage.getItem("token");
    const id = localStorage.getItem("id");

    const [profile, setProfile] = useState([]);

    useEffect(() => {
        const getProfile = async () => {
            const profile_from_server = await getProfileAPI();
            setProfile(profile_from_server);
        }
        getProfile();
    }, []);

    const getProfileAPI = async () => {
        try {

            const results = await axios({
                method: "GET",
                url: `http://localhost:8000/companies/${id}`,
                headers: { Authorization: `Bearer ${token}` },
            });
            const data = await results.data;
            localStorage.setItem("email",results.data.email)
            console.log(data)
            return data;
        } catch (error) {
            console.log(error);
        }
    }


    console.log("----- "+profile)

    return (
        <div className="profile">
            <div className="banner"></div>
            <img  className="pp" src={gray} alt="logo"/>
            <h1 className="welcome">Welcome, {profile.name} !</h1>
            <h1 className="tagline">{profile.tagline}</h1> <br/>
            <h1 className="location">{profile.type}</h1>

        </div>
    )
}

export default CompanyProfile