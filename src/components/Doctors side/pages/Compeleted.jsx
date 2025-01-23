import AppointmentHeader from "../../../ui/AppointmentHeader.jsx";
import AppointmentCard from "../../../ui/AppointmentCard.jsx";
import {useEffect, useState} from "react";

const Compeleted = () => {
    const [completed, setCompleted] = useState([]);


    useEffect(() => {
        const fetchData = async () =>{
            try {
                const response = await fetch("http://localhost:3555/bookingAppointment");
                const data = await response.json();
                const newData = data.filter(ele => ele.completed === true)
                console.log(newData)
                setCompleted(newData)
            } catch (err){
                console.log(err)
            }
        }
        fetchData()
    }, []);
    return (
        <div className="">
            <AppointmentHeader heading="Completed Appointments"/>
            <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4">
                {
                    completed.map((appoinitment,index) =>(
                        <AppointmentCard key={index}
                             name={appoinitment.name}
                             date={appoinitment.date}
                             time={appoinitment.time}
                             description={appoinitment.comment}
                             age={appoinitment.age}
                             contact={appoinitment.contact}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Compeleted;