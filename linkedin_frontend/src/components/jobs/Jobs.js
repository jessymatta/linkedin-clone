import "./jobs.css"

const Jobs = (props) => {

    return (
        <div className="jobs-container">
            <h2 className="jobs-title">Posted Job Openings</h2>

            <div className="job">
                <div className="company-logo">
                    <img src={props.logo_url} alt="company logo"/>
                </div>

                <div>
                    <h2 className="position-name">Position Name</h2>
                    <h9 className="text-in-job">Description part of </h9> <br/>
                    <h9 className="text-in-job"> created_at </h9>
                    <button class="btn-view-applicants">View Applicants</button>
                </div>
            </div>
        </div>
    )
}

export default Jobs