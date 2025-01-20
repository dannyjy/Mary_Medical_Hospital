import React, { useState } from "react";
import { Link } from "react-router-dom";

const BookAppointment = () => {
  const [gender, setGender] = useState("");
  const [errors, setErrors] = useState({});

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const validateForm = (appointmentData) => {
    const newErrors = {};
    if (!appointmentData.name) newErrors.name = "Full Name is required";
    if (!appointmentData.age) newErrors.age = "Age is required";
    if (!appointmentData.contact) newErrors.contact = "Contact is required";
    if (!appointmentData.gender) newErrors.gender = "Gender is required";
    if (!appointmentData.doctor)
      newErrors.doctor = "Doctor selection is required";
    if (!appointmentData.date) newErrors.date = "Preferred Date is required";
    if (!appointmentData.time) newErrors.time = "Preferred Time is required";
    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const appointmentData = {
      name: event.target.name.value,
      age: event.target.age.value,
      contact: event.target.contact.value,
      gender: gender,
      doctor: event.target.doctor.value,
      date: event.target.date.value,
      time: event.target.time.value,
      comment: event.target.comment.value,
    };

    const formErrors = validateForm(appointmentData);
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      setErrors({});
      fetch("http://localhost:5000/api/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(appointmentData),
      })
        .then((response) => response.text())
        .then((data) => {
          console.log(data);
          alert("Done")
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col sm:flex-row h-auto m-auto sm:h-[46rem] w-full sm:w-[70rem] bg-white dark:bg-sidebar rounded-[20px] shadow sm:shadow-lg">
        <div className="w-full p-4 sm:py-6 sm:px-8 md:px-16 lg:px-24 border rounded-lg bg-slate-100">
          <Link to="/">
            <img
              width={30}
              height={30}
              src="/public/images/home2.svg"
              alt=""
              className="mb-4"
            />
          </Link>
          <h1 className="text-xl sm:text-2xl lg:text-3xl mb-4">
            Book an Appointment
          </h1>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
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
                placeholder="Enter your full name"
                className={`mt-1 block w-full h-12 p-2 border border-gray-200 rounded-md${
                  errors.name ? " border-red-500" : ""
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>
            <div className="mb-2">
              <h4 className="text-lg font-medium text-gray-700">Gender</h4>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  checked={gender === "male"}
                  onChange={handleGenderChange}
                  className="mr-2 leading-tight"
                />
                <label htmlFor="male" className="mr-4">
                  Male
                </label>

                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  checked={gender === "female"}
                  onChange={handleGenderChange}
                  className="mr-2 leading-tight"
                />
                <label htmlFor="female">Female</label>
              </div>
              {errors.gender && (
                <p className="text-red-500 text-sm mt-1">{errors.gender}</p>
              )}
            </div>

            <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="age"
                  className="block text-sm sm:text-base lg:text-lg font-medium text-gray-700"
                >
                  Age
                </label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  className={`mt-1 block w-full h-12 p-2 border border-gray-200 rounded-md${
                    errors.age ? " border-red-500" : ""
                  }`}
                />
                {errors.age && (
                  <p className="text-red-500 text-sm mt-1">{errors.age}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="contact"
                  className="block text-sm sm:text-base lg:text-lg font-medium text-gray-700"
                >
                  Contact
                </label>
                <input
                  type="text"
                  id="contact"
                  name="contact"
                  placeholder="+250"
                  className={`mt-1 block w-full p-2 h-12 border border-gray-200 rounded-md${
                    errors.contact ? " border-red-500" : ""
                  }`}
                />
                {errors.contact && (
                  <p className="text-red-500 text-sm mt-1">{errors.contact}</p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="doctor"
                className="block text-sm sm:text-base lg:text-lg font-medium text-gray-700"
              >
                Doctor
              </label>
              <select
                id="doctor"
                name="doctor"
                className={`w-full border px-2 h-12 rounded-[6px]${
                  errors.doctor ? " border-red-500" : ""
                }`}
              >
                <option value="" className="text-gray-300">
                  Select a doctor
                </option>
                <option value="Dr. John Doe">Dr. John Doe</option>
                <option value="Dr. Jane Doe">Dr. Jane Doe</option>
                <option value="Dr. Alex Smith">Dr. Alex Smith</option>
                <option value="Dr. Emily Clark">Dr. Emily Clark</option>
                <option value="Dr. Michael Brown">Dr. Michael Brown</option>
                <option value="Dr. Sarah Johnson">Dr. Sarah Johnson</option>
              </select>
              {errors.doctor && (
                <p className="text-red-500 text-sm mt-1">{errors.doctor}</p>
              )}
            </div>

            <div className="mb-4 mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="date"
                  className="block text-sm sm:text-base lg:text-lg font-medium text-gray-700"
                >
                  Preferred Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  className={`mt-1 block w-full h-12 p-2 border border-gray-200 rounded-md${
                    errors.date ? " border-red-500" : ""
                  }`}
                />
                {errors.date && (
                  <p className="text-red-500 text-sm mt-1">{errors.date}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="time"
                  className="block text-sm sm:text-base lg:text-lg font-medium text-gray-700"
                >
                  Preferred Time
                </label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  className={`mt-1 block w-full h-12 p-2 border border-gray-200 rounded-md${
                    errors.time ? " border-red-500" : ""
                  }`}
                />
                {errors.time && (
                  <p className="text-red-500 text-sm mt-1">{errors.time}</p>
                )}
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor="comment"
                className="block text-sm sm:text-base lg:text-lg font-medium text-gray-700"
              >
                Medical History
              </label>
              <textarea
                id="comment"
                name="comment"
                placeholder="Optional"
                className="mt-1 block w-full h-30 p-2 border border-gray-200 rounded-md"
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="bg-blue-400 text-white py-2 px-4 rounded"
            >
              Book Appointment
            </button>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;
