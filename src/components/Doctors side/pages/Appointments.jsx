import AppointmentHeader from "../../../ui/AppointmentHeader.jsx";
import RecievedAppointmentCard from "../../../ui/RecievedAppointmentCard.jsx";
import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Appointments = () => {
    const [appointments, setAppointments] = useState([]);
    const navigate = useNavigate()

    const onComplete =  (id) => {
        axios.patch(`http://localhost:3555/bookingAppointment/${id}`,{"completed": true})
            .then(result => {
                console.log(result);
                navigate('/home/Completed')
            })
    }

    const onCancel = (id) => {
        axios.patch(`http://localhost:3555/bookingAppointment/${id}`,{"cancelled": true})
            .then(result => {
                console.log(result);
                navigate('/home/Cancelled')
            })
    }

    useEffect(() => {
        const fetchData = async () =>{
            try {
                const response = await fetch("http://localhost:3555/bookingAppointment");
                const data = await response.json();
                const newData = data.filter(ele =>{
                    if(ele.completed === false){
                        if(ele.cancelled === false){
                      return ele
                        }
                    }
                })
                console.log(newData)
                setAppointments(newData)
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
                    appointments.length > 0 &&appointments.map((appoinitment,index) =>(
                        <RecievedAppointmentCard key={index}
                            name={appoinitment.name}
                            date={appoinitment.date}
                            time={appoinitment.time}
                            description={appoinitment.comment}
                            age={appoinitment.age}
                            contact={appoinitment.contact}
                            onComplete={() => onComplete(appoinitment._id)}
                            onCancel={() => onCancel(appoinitment._id)}
                        />
                    ))
                }
            </div>
            <p className="text-2xl text-center mt-8">{appointments.length === 0 && "There is no Appintments"}</p>
        </div>
    )
}

export default Appointments;