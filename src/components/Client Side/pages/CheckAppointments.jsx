import React, { useState } from "react";
import { Link } from "react-router-dom";

const CheckAppointments = () => {
  const [appointments, setAppointments] = useState([
    {
      name: "John Doe",
      date: "2025-10-25",
      time: "10:00 AM",
      description: "General Checkup",
      age: 30,
      contact: "+250793227470",
      onComplete: () => console.log("Completed!"),
      onCancel: () => console.log("Cancelled!"),
    },
    {
      name: "Jane Deo",
      date: "2025-11-25",
      time: "11:00 AM",
      description: "Dentist Appointment",
      age: 25,
      contact: "+250793227570",
      onComplete: () => console.log("Completed!"),
      onCancel: () => console.log("Cancelled!"),
    },
  ]);

  const [currentAppointment, setCurrentAppointment] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleReschedule = (appointment) => {
    setCurrentAppointment(appointment);
    setShowPopup(true);
  };

  const handleRescheduleSubmit = (e) => {
    e.preventDefault();
    const updatedAppointments = appointments.map((appt) => {
      if (appt === currentAppointment) {
        return {
          ...appt,
          date: e.target.date.value,
          time: e.target.time.value,
        };
      }
      return appt;
    });
    setAppointments(updatedAppointments);
    setShowPopup(false);
  };

  return (
    <div className="mx-none sm:mx-12">
      <div className="m-4">
        <Link to="/">
          <img
            src="/Images/home2.svg"
            alt=""
            className="my-6 w-[30px]"
          />
        </Link>
        <h1 className="text-[2rem] my-4">Reschedule Appointment Here</h1>
        <input
          type="email"
          placeholder="Enter your email"
          className="border border-gray-300 w-[18rem] sm:w-[20rem] lg:w-[30rem] py-3 pl-3 rounded-2xl mr-3"
        />
        <button className="border border-gray-200 rounded-[10px] p-2 bg-slate-200 my-3 shadow-sm">
          Search Appointment
        </button>
        <div className="border-t-2 border-b-black mt-8" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-4">
        {appointments.map((appointment, index) => (
          <RescheduleCards
            key={index}
            {...appointment}
            onComplete={() => handleReschedule(appointment)}
          />
        ))}
      </div>
      {showPopup && (
        <ReschedulePopupForm
          appointment={currentAppointment}
          onSubmit={handleRescheduleSubmit}
        />
      )}
    </div>
  );
};

export default CheckAppointments;

const RescheduleCards = ({
  name,
  date,
  time,
  description,
  age,
  contact,
  onComplete,
  onCancel,
}) => {
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
        <button className="text-blue-500 rounded-xl" onClick={onComplete}>
          Reschedule
        </button>
        <button className="text-red-500 rounded-xl" onClick={onCancel}>
          Delete
        </button>
      </article>
    </div>
  );
};

const ReschedulePopupForm = ({ appointment, onSubmit }) => {
  return (
    <div className="popup absolute top-[35%] md:right-[25%] xl:right-[35%] border-2 border-gray-100 bg-slate-100 py-8 px-5 shadow-sm rounded-2xl">
      

      <h2 className="text-center text-[1.5rem] mb-3">Reschedule Appointment</h2>
      <form onSubmit={onSubmit}>
        <section className="grid grid-cols-2 gap-3">
          <div>
            <label
              htmlFor="date"
              className="block text-sm sm:text-base lg:text-lg font-medium text-gray-700"
            >
              Preferred Date
            </label>
            <input
              type="text"
              name="date"
              defaultValue={appointment.date}
              placeholder="Enter new date"
              className="mt-1 block w-full h-12 p-2 border border-gray-200 rounded-md"
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
              type="text"
              name="time"
              defaultValue={appointment.time}
              placeholder="Enter new time"
              className="mt-1 block w-full h-12 p-2 border border-gray-200 rounded-md"
            />
          </div>
        </section>
        <button
          type="submit"
          className="border border-gray-200 rounded-[10px] p-2 bg-slate-300 w-full mt-3 shadow-sm"
        >
          Reschedule
        </button>
      </form>
    </div>
  );
};
