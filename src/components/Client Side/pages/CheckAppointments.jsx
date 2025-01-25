import {useState} from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const CheckAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [email, setEmail] = useState([]);
  const [currentAppointment, setCurrentAppointment] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

    const fetchData = async () => {
      axios.get(`http://localhost:3555/bookingAppointment/${email}`)
          .then(response => {
            setAppointments(response.data);
          })
          .catch(error => {
            console.log(error);
          });
    };
    const appointmentsArray = Array.isArray(appointments) ? appointments : [appointments];

    const handleDelete = () => {
        axios.delete(`http://localhost:3555/bookingAppointment/${email}`)
            .then(response => {
                setAppointments(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    };

      const handleReschedule = (appointment) => {
        setCurrentAppointment(appointment);
        console
        setShowPopup(true);
      };

      const handleRescheduleSubmit = (e) => {
        e.preventDefault();
        const id = currentAppointment._id
        axios.post(`http://localhost:3555/rescheduleAppointment`,{
            id,
            date: e.target.date.value,
            time: e.target.time.value
        })
            .then(response => setAppointments(response.data))
            .catch(err => console.log(err));
            setShowPopup(false);
      };

  return (
    <div className="mx-none sm:mx-12">
      <div className="m-4">
        <Link to="/">
          <img src="/Images/home2.svg" alt="" className="my-6 w-[30px]"/>
        </Link>
        <h1 className="text-[2rem] my-4">Reschedule Appointment Here</h1>
        <input
          type="email"
          id="email"
          onChange={ (e) => setEmail(e.target.value) }
          placeholder="Enter your email"
          className="border border-gray-300 w-[18rem] sm:w-[20rem] lg:w-[30rem] py-3 pl-3 rounded-2xl mr-3"
        />
        <button className="border border-gray-200 rounded-[10px] p-2 bg-slate-200 my-3 shadow-sm" onClick={fetchData}>
          Search Appointment
        </button>
        <div className="border-t-2 border-b-black mt-8" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-4">
        {
            appointmentsArray.length > 0 &&
            appointmentsArray.map((appointment,index) => (
          <RescheduleCards
            key={index}
            name={appointment.name}
            date={appointment.date}
            time={appointment.time}
            description={appointment.comment}
            age={appointment.age}
            contact={appointment.contact}
            onComplete={() => handleReschedule(appointment)}
            onCancel={() => handleDelete(appointment)}
          />
        ))}
      </div>
      {showPopup && (
        <ReschedulePopupForm appointment={currentAppointment} onSubmit={handleRescheduleSubmit}/>
      )}
    </div>
  );
};

export default CheckAppointments;

const RescheduleCards = ({name,date,time,description,age,contact,onComplete,onCancel,}) => {
  return (
    <div className="bg-[#EFF0F1] p-4 rounded-xl shadow-[#ddd] shadow">
      <article className="flex justify-between items-center">
        <section>
          <h1 className="text-2xl">{name}</h1>
          <h2 className="text-gray-600">{age} years old</h2>
        </section>
        <h3 className="text-gray-500">{contact}</h3>
      </article>
      <p className="py-2">{description}</p>
      <section className="flex justify-between items-center pb-2">
        <h1 className="">{date}</h1>
        <h2 className="">{time}</h2>
      </section>
      <div className="border-t-2 border-b-black" />
      <article className="flex justify-between items-center pt-2">
        <button className="text-blue-500 rounded-xl" onClick={onComplete}>Reschedule</button>
        <button className="text-red-500 rounded-xl" onClick={onCancel}>Delete</button>
      </article>
    </div>
  );
};

<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#000000" d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"></path><path fill="#000000" d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"></path></g></svg>

const ReschedulePopupForm = ({ appointment, onSubmit }) => {
  return (
    <div className="popup absolute top-[35%] md:right-[25%] xl:right-[35%] border-2 border-gray-100 bg-slate-100 py-8 px-5 shadow-sm rounded-2xl">
      <h2 className="text-center text-[1.5rem] mb-3">Reschedule Appointment</h2>
      <form onSubmit={onSubmit}>
        <section className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-sm sm:text-base lg:text-lg font-medium text-gray-700">Preferred Date</label>
            <input
              type="date"
              name="date"
              defaultValue={appointment.date}
              placeholder="Enter new date"
              className="mt-1 block w-full h-12 p-2 border border-gray-200 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm sm:text-base lg:text-lg font-medium text-gray-700">Preferred Time</label>
            <input
              type="time"
              name="time"
              defaultValue={appointment.time}
              placeholder="Enter new time"
              className="mt-1 block w-full h-12 p-2 border border-gray-200 rounded-md"
            />
          </div>
        </section>
        <button type="submit" className="border border-gray-200 rounded-[10px] p-2 bg-slate-300 w-full mt-3 shadow-sm">Reschedule</button>
      </form>
    </div>
  );
};
