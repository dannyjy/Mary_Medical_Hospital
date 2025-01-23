import AppointmentHeader from "../../../ui/AppointmentHeader.jsx";
import RecievedAppointmentCard from "../../../ui/RecievedAppointmentCard.jsx";
import {useEffect, useState} from "react";

const Appointments = () => {
    const [appointments, setAppointments] = useState([]);

    const onComplete = async () => {

    }

    const onCancel = () => {

    }

    useEffect(() => {
        const fetchData = async () =>{
            try {
                const response = await fetch("http://localhost:3555/bookingAppointment");
                const data = await response.json();
                setAppointments(data)
            } catch (err){
                console.log(err)
            }
        }
        fetchData()
    }, []);

    return (
        <div className="">
            <AppointmentHeader heading="Book Appointment"/>
            <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4">
                {
                    appointments.map((appoinitment,index) =>(
                        <RecievedAppointmentCard key={index}
                            name={appoinitment.name}
                            date={appoinitment.date}
                            time={appoinitment.time}
                            description={appoinitment.comment}
                            age={appoinitment.age}
                            contact={appoinitment.contact}
                            onComplete={() => onComplete(appoinitment._id)}
                            onCancel={onCancel}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Appointments;