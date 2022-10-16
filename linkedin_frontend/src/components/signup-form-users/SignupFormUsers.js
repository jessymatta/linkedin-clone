import "./signup-form-users.css"

const SignupFormUsers = () => {
    return (
        <div className="signup-form-users">
            <p class="signup-title">Join the biggest professional community</p>

            <form className="signup-form">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" required="required" placeholder="Enter your name"/>

            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" required="required" placeholder="Enter your email"/>

            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" required="required" placeholder="Password (8+ characters)"/>
        </form>
        </div>
    )
}

export default SignupFormUsers