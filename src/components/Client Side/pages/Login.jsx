import {Link} from "react-router-dom";

const Login = () => {
    return (
        <div>
            <div>
                <Link to="/login/SignUp">
                    <button>Sign Up</button>
                </Link>
            </div>
            <h1>Login</h1>
        </div>
    )
}

export default Login;