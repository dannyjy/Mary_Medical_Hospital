import {Link} from "react-router-dom";
import axios from "axios";
import {useState} from "react";

const SignUp = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = () => {
    axios.post('http://localhost:3555/register', {name,email,password})
        .then(result => {
          console.log(result)
          console.log(result.data)
          alert("Account created successfully")
        })
        .catch(err => console.log(err))
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col sm:flex-row h-auto m-auto sm:h-[38rem] w-full sm:w-[40rem] bg-white dark:bg-sidebar rounded-[20px] shadow sm:shadow-lg">
        <div className="w-full p-8 border rounded-2xl bg-slate-100">
          <Link to="/">
            <img
              width={30}
              height={30}
              src="/Images/home2.svg"
              alt=""
              className="mb-8"
            />
          </Link>
          <h1 className="text-xl sm:text-2xl lg:text-3xl mb-2">SIGNUP</h1>
          <form >
            <div>
              <label
                htmlFor="name"
                className="block text-sm sm:text-base lg:text-lg font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
                className="mt-1 block w-full p-2 border border-gray-200 h-12 rounded-md"
              />
            </div>

            <div className="mt-4">
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
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="mt-1 block w-full p-2 border h-12 border-gray-200 rounded-md"
              />
            </div>

            <div className="mt-4">
              <label
                htmlFor="password"
                className="block text-sm sm:text-base lg:text-lg font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                autoComplete="off"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="mt-1 block w-full p-2 h-12 border border-gray-200 rounded-md"
              />
            </div>

            <button
              type="button"
              onClick={handleSubmit}
              className="bg-blue-400 text-white py-2 px-8 mt-10 rounded"
            >
              Sign Up
            </button>
            <p className="mt-12">
              Already have an account?{" "}
              <Link to="/Login">
                <span className="text-blue-400">Login</span>
              </Link>
            </p>
          </form>
          {/*{error && <p className="error text-red-500 mt-4">{error}</p>}*/}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
