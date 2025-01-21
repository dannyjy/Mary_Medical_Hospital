import { Link } from "react-router-dom";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

const Login = () => {

  // const email = document.getElementById('email');
  // const password = document.getElementById('password');
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [login, setLogin] = useState();
  const navigate = useNavigate();

  // useEffect(() => {
  // }, []);

    const handleLogIn = async (e) =>{
      e.preventDefault()
      const response = await fetch("http://localhost:3555/register");
      const data = await response.json();
      setLogin(data)

      if (email == login.email && password == login.password){
        alert("Login Successful")
        // navigate("/Home")
      }
      else{
        alert("Invalid Credentials")
      }
    }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col sm:flex-row h-auto m-auto sm:h-[38rem] w-full sm:w-[40rem] bg-white dark:bg-sidebar rounded-[20px] shadow sm:shadow-lg">
        <div className="w-full p-8 sm:py-6 border rounded-2xl bg-slate-100">
          <Link to="/">
            <img
              width={30}
              height={30}
              src="/Images/home2.svg"
              alt=""
              className="mb-8"
            />
          </Link>
          <h1 className="text-xl sm:text-2xl lg:text-3xl mb-4">LOGIN</h1>
          <form >
            <div className="mt-6">
              <label
                htmlFor="email"
                className="block text-sm sm:text-base lg:text-lg font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="mt-1 block w-full p-2 border border-gray-200 rounded-md"
              />
            </div>

            <div className="mt-10">
              <label
                htmlFor="password"
                className="block text-sm sm:text-base lg:text-lg font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="mt-1 block w-full p-2 border border-gray-200 rounded-md"
              />
            </div>
            <p className="text-blue-400 mt-4">Forgot Password</p>
            <button
              type="button"
              onClick={handleLogIn}
              className="bg-blue-400 text-white py-2 px-8 mt-10 rounded"
            >
              Login
            </button>
          </form>
          <p className="mt-12">
            New user?{" "}
            <Link to="/Login/SignUp">
              <span className="text-blue-400">Sign up</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
