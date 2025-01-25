import { Link } from "react-router-dom";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

const Login = () => {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

    const handleLogIn = async (e) =>{
        e.preventDefault();
        // const response = await fetch("http://localhost:3555/register");
        // const data = await response.json();
        //
        // const message = document.getElementById('message');
        // const user = data.find((user) => user.email === email && user.password === password);
        //
        // if (user) {
        //   navigate("/home");
        // } else {
        //   if (!email && !password) {
        //     message.innerHTML = "Please fill fields email and password";
        //   }else if(!email || !password){
        //     message.innerHTML = "Please fill all fields";
        //   }else{
        //     message.innerHTML = "User not found";
        //   }
        // }

        axios.post('http://localhost:3555/login', {email,password})
            .then(result => {
                sessionStorage.setItem("user",JSON.stringify(result.data));
                navigate("/home")
            })
            .catch(err => console.log(err));
    }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col sm:flex-row w-[36rem] bg-white dark:bg-sidebar rounded-[20px] sm:shadow-lg">
        <div className="w-full py-14 px-5 sm:px-10 border rounded-2xl bg-[#EFF0F1]">
          <h1 className="text-4xl font-medium mb-5 text-center">LOGIN</h1>
          <form onSubmit={handleLogIn}>
            <div className="mt-6">
              <label className="text-xl font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="on"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="mb-4 mt-1 block w-full p-2 border border-gray-200 h-12 rounded-md"
              />
            </div>
            <div className="">
              <label className="text-xl font-medium text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                autoComplete="off"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="mt-1 block w-full p-2 border border-gray-200 h-12 rounded-md"
              />
            </div>
            <p className="text-blue-400 mt-4">Forgot Password</p>
            <button type="submit" className="bg-blue-400 text-white py-2 px-8 mt-4 rounded">Login</button>
            <p id="message" className="text-red-600 text-center"></p>
          </form>
          <p className="mt-4">
            New user?{" "}
            <Link to="/Login/SignUp">
              <span className="text-blue-400 ">Sign up</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
