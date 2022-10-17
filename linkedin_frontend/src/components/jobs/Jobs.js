import "./jobs.css"
import axios from "axios";
import { useState, useEffect } from "react";

const Jobs = (props) => {

    const token = localStorage.getItem("token");
    const id = localStorage.getItem("id");

    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const getJobs = async () => {
            const jobs_from_server = await getJobsAPI();
            setJobs(jobs_from_server.job_openings);
        }
        getJobs();
    }, []);

    const getJobsAPI = async () => {
        try {

            const results = await axios({
                method: "POST",
                url: "http://localhost:8000/companies/jobs",
                data: { id },
                headers: { Authorization: `Bearer ${token}` },
            });
            const data = await results.data;
            console.log(results)
            console.log(results.data.job_openings)
            return data;
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="jobs-container">
            <h2 className="jobs-title">Posted Job Openings</h2>

            {jobs.map((job) => (
                <div className="job">
                    <div className="company-logo">
                        <img src={props.logo_url} alt="company logo" />
                    </div>

                    <div>
                        <h2 className="position-name">{job.position_title}</h2>
                        <h2 className="text-in-job">{job.position_description} </h2> <br />
                        <h2 className="text-in-job"> created_at </h2>
                        <button className="btn-view-applicants">View Applicants</button>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default Jobs