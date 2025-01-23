import AppointmentHeader from "../../../ui/AppointmentHeader.jsx";
import AppointmentCard from "../../../ui/AppointmentCard.jsx";
import {useEffect, useState} from "react";

const Cancelled = () => {

    const [cancelled, setCancelled] = useState([]);

    useEffect(() => {
        const fetchData = async () =>{
            try {
                const response = await fetch("http://localhost:3555/bookingAppointment");
                const data = await response.json();
                const newData = data.filter(ele => ele.cancelled === true)
                console.log(newData)
                setCancelled(newData)
            } catch (err){
                console.log(err)
            }
        }
        fetchData()
    }, []);

    return (
        <div className="">
            <AppointmentHeader heading="Cancelled Appointments"/>
            <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4">
                {
                    cancelled.map((appoinitment,index) =>(
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

export default Cancelled;