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
                    <h2 className="text-in-job">Description part of </h2> <br/>
                    <h2 className="text-in-job"> created_at </h2>
                    <button className="btn-view-applicants">View Applicants</button>
                </div>
            </div>
        </div>
    )
}

export default Jobs