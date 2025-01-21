import {Link} from "react-router-dom";
import {useState} from "react";
import axios from "axios";

const BookAppointment = () => {

  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [contact, setContact] = useState();
  const [doctor, setDoctor] = useState();
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [comment, setComment] = useState();
  const [gender, setGender] = useState();

  const handleSubmit = () => {
    axios.post('http://localhost:3555/bookingAppointment', {name,age,contact,doctor,date,time,comment})
        .then(result => {
          console.log(result)
          console.log(result.data)
          alert("Booking Successful")
        })
        .catch(err => console.log(err))
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

          <form >
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
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
                className={`mt-1 block w-full h-12 p-2 border border-gray-200 rounded-md`}
              />

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
                  onChange={(e) => setGender(e.target.value)}
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
                  onChange={(e) => setGender(e.target.value)}
                  className="mr-2 leading-tight"
                />
                <label htmlFor="female">Female</label>
              </div>

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
                  onChange={(e) => setAge(e.target.value)}
                  className={`mt-1 block w-full h-12 p-2 border border-gray-200 rounded-md `}
                />

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
                  onChange={(e) => setContact(e.target.value)}
                  placeholder="+250"
                  className={`mt-1 block w-full p-2 h-12 border border-gray-200 rounded-md`}
                />

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
                onChange={(e) => setDoctor(e.target.value)}
                className={`w-full border px-2 h-12 rounded-[6px]`}
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
                  onChange={(e) => setDate(e.target.value)}
                  className={`mt-1 block w-full h-12 p-2 border border-gray-200 rounded-md border-red-500" : ""
                  }`}
                />

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
                  onChange={(e) => setTime(e.target.value)}
                  className={`mt-1 block w-full h-12 p-2 border border-gray-200 rounded-md border-red-500" : ""
                  }`}
                />

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
