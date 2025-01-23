import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const BookAppointment = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [contact, setContact] = useState('');
  const [doctor, setDoctor] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [comment, setComment] = useState('');
  const [gender, setGender] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!name) newErrors.name = 'Name is required';
    if (!gender) newErrors.gender = 'Gender is required';
    if (!age) newErrors.age = 'Age is required';
    if (age && (isNaN(age) || age <= 0)) newErrors.age = 'Age must be a positive number';
    if (!contact) newErrors.contact = 'Contact is required';
    if (!doctor) newErrors.doctor = 'Doctor selection is required';
    if (!date) newErrors.date = 'Date is required';
    if (!time) newErrors.time = 'Time is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      axios.post('http://localhost:3555/bookingAppointment', { name, age, contact, doctor, date, time, comment, gender })
        .then(result => {
          console.log(result);
          console.log(result.data);
          alert("Booking Successful");
        })
        .catch(err => console.log(err));
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-[62rem] rounded-[20px] sm:shadow-lg">
        <div className="w-full p-4 py-14 px-5 sm:px-14 border rounded-2xl bg-slate-100">
          <button>
            <Link to="/">
              <img src="/Images/home2.svg" className="mb-6 h-[30px]"/>
            </Link>
          </button>
          <h1 className="text-xl sm:text-2xl lg:text-3xl mb-4">Book an Appointment</h1>
          <form>
            <div className="mb-4">
              <label className="block text-sm sm:text-base lg:text-lg font-medium text-gray-700" >Full Name</label>
              <input
                type="text"
                name="name"
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
                className={`mt-1 block w-full h-12 p-2 border rounded-md ${errors.name && "border-red-500"}`}
              />
              {errors.name && (<p className="text-red-500 text-xs mt-1">{errors.name}</p>)}
            </div>

            <div className="mb-2">
              <h4 className="text-lg font-medium text-gray-700">Gender</h4>
              <div className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={gender === "male"}
                  onChange={(e) => setGender(e.target.value)}
                  className="mr-2 leading-tight"
                />
                <label htmlFor="male" className="mr-4">Male</label>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={gender === "female"}
                  onChange={(e) => setGender(e.target.value)}
                  className="mr-2 leading-tight"
                />
                <label htmlFor="female">Female</label>
              </div>
              {errors.gender && (<p className="text-red-500 text-xs mt-1">{errors.gender}</p>)}
            </div>
            <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm sm:text-base lg:text-lg font-medium text-gray-700" >Age</label>
                <input
                  type="text"
                  name="age"
                  onChange={(e) => setAge(e.target.value)}
                  className={`mt-1 block w-full h-12 p-2 border rounded-md ${errors.age && "border-red-500"}`}
                />
                {errors.age && (<p className="text-red-500 text-xs mt-1">{errors.age}</p>)}
              </div>

              <div>
                <label
                  htmlFor="contact"
                  className="block text-sm sm:text-base lg:text-lg font-medium text "
                >
                  Contact
                </label>
                <input
                  type="text"
                  name="contact"
                  onChange={(e) => setContact(e.target.value)}
                  placeholder="+250"
                  className={`mt-1 block w-full p-2 h-12 border border-gray-200 rounded-md ${errors.contact && "border-red-500"}`}
                />
                {errors.contact && (<p className="text-red-500 text-xs mt-1">{errors.contact}</p>)}
              </div>
            </div>
            <div>
              <label className="block text-sm sm:text-base lg:text-lg font-medium text-gray-700" >Doctor</label>
              <select
                name="doctor"
                onChange={(e) => setDoctor(e.target.value)}
                className={`w-full border px-2 h-12 rounded-[6px]`}
              >
                <option
                  className={`text-gray-300 ${errors.doctor && "border-red-500"}`}
                >
                  Select a doctor
                </option>
                <option value="Dr. John Doe">Dr. John Doe</option>
                <option value="Dr. Jane Doe">Dr. Jane Doe</option>
                <option value="Dr. Alex Smith">Dr. Alex Smith</option>
                <option value="Dr. Emily Clark">Dr. Emily Clark</option>
                <option value="Dr. Michael Brown">Dr. Michael Brown</option>
                <option value="Dr. Sarah Johnson">Dr. Sarah Johnson</option>
              </select>
              {errors.doctor && (<p className="text-red-500 text-xs mt-1">{errors.doctor}</p>)}
            </div>
            <div className="mb-4 mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="date"
                  className="block text-sm sm:text-base lg:text-lg font-medium text-gray-700"
                >
                  Preferred Date</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  onChange={(e) => setDate(e.target.value)}
                  className={`mt-1 block w-full h-12 p-2 border border-gray-200 rounded-md ${
                    errors.date && "border-red-500"
                  }`}
                />
                <p className="text-red-500 text-xs mt-1">{errors.date}</p>
              </div>
              <div>
                <label className="block text-sm sm:text-base lg:text-lg font-medium text-gray-700">Preferred Time</label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  onChange={(e) => setTime(e.target.value)}
                  className={`mt-1 block w-full h-12 p-2 border border-gray-200 rounded-md ${errors.time && "border-red-500"}`}
                />
                <p className="text-red-500 text-xs mt-1">{errors.time}</p>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm sm:text-base lg:text-lg font-medium text-gray-700">Medical History</label>
              <textarea
                id="comment"
                name="comment"
                onChange={(e) => setComment(e.target.value)}
                placeholder="Optional"
                className="mt-1 block w-full h-30 p-2 border border-gray-200 rounded-md"
              ></textarea>
            </div>
            <button
              type="button"
              onClick={handleSubmit}
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