import AppointmentHeader from "../../../ui/AppointmentHeader.jsx";
// import {BookAppointmentData} from "../doctorData.js";
// import AppointmentCard from "../../../ui/AppointmentCard .jsx";

const Rescheduled = () => {
    return (
        <div className="">
            <AppointmentHeader heading="Rescheduled Appointments"/>
            <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4">
                {
                    // BookAppointmentData.map((appoinitment,index) =>(
                    //     <AppointmentCard key={index}
                    //          name={appoinitment.Name}
                    //          date={appoinitment.date}
                    //          time={appoinitment.time}
                    //          description={appoinitment.Description}
                    //          age={appoinitment.Age}
                    //          contact={appoinitment.contact}
                    //     />
                    // ))
                }
            </div>
        </div>
    )
}

export default Rescheduled;