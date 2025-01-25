import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [image, setImage] = useState("");
  const [basicDetails, setBasicDetails] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!name || !email || !password) {
      setError("All fields are required.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!passwordRegex.test(password)) {
      setError(
        "Password must be at least 8 characters long, contain letters and numbers."
      );
      return;
    }
    // console.log(image)
    const fileReader = new FileReader();
    fileReader.readAsDataURL(image);
    fileReader.onload = () => {
      console.log(fileReader.result);
    axios
      .post("http://localhost:3555/register", { name,phone,specialty,basicDetails,email,image:fileReader.result,password })
      .then((result) => {
        console.log(result);
        console.log(result.data);
        alert("Account created successfully");
      })
      .catch((err) => setError(err.message));
    };
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col sm:flex-row w-[40rem] bg-white dark:bg-sidebar rounded-[20px] shadow sm:shadow-lg">
        <div className="w-full py-10 px-5 sm:px-8 border rounded-2xl bg-[#EFF0F1]">
          <h1 className="text-4xl font-medium mb-5 text-center">SIGNUP</h1>
          <form>
            <div>
              <label className="text-xl font-medium text-gray-700" >Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
                className="mt-1 block w-full p-2 border border-gray-200 h-12 rounded-md"
              />
            </div>
            <section className="grid sm:grid-cols-2 gap-2">
            <div className="mt-4">
              <label className="text-xl font-medium text-gray-700">Specialty</label>
              <input
                  type="text"
                  id="specialty"
                  name="specialty"
                  onChange={(e) => setSpecialty(e.target.value)}
                  placeholder="Enter your specialty"
                  className="mt-1 block w-full p-2 border border-gray-200 h-12 rounded-md"
              />
            </div>
            <div className="mt-4">
              <label className="text-xl font-medium text-gray-700">Phone Number</label>
              <input
                  type="text"
                  id="phone"
                  name="phone"
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone number"
                  className="mt-1 block w-full p-2 border border-gray-200 h-12 rounded-md"
              />
            </div>
            </section>
            <div className="mt-4">
              <label className="text-xl font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="mt-1 block w-full p-2 border h-12 border-gray-200 rounded-md"
              />
            </div>
            <article className="mt-4">
              <label className="text-xl font-medium text-gray-700">About yourself</label>
              <textarea name=""
              placeholder="Basic Details"
              onChange={(e) => setBasicDetails(e.target.value)}
              className="mt-1 block w-full p-2 border max-h-26 border-gray-200 rounded-md"></textarea>
            </article>
            <section className="mt-4">
              <label className="text-xl font-medium text-gray-700">Upload Profile</label>
              <input
                type="file"
                name="image"
                onChange={(e) => setImage(e.target.files[0])}
                className="mt-1 block w-full p-2 h-12 border border-gray-400 rounded-md"
                />
            </section>
            <div className="mt-4">
              <label className="text-xl font-medium text-gray-700">Password</label>
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
            {error && <p className="error text-red-500 mt-4">{error}</p>}{" "}
            <button type="button" onClick={handleSubmit} className="bg-blue-400 text-white py-2 px-8 mt-10 rounded">Sign Up</button>
            <p className="mt-4">
              Already have an account?{" "}
              <Link to="/Login"><span className="text-blue-400">Login</span></Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
