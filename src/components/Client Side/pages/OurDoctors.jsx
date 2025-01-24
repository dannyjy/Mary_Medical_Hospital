import Button from "../../../ui/Button.jsx";
import {DoctorsData} from "../../../data.jsx";
import ContextHeader from "../../../ui/ContextHeader.jsx";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

const OurDoctors = () => {
    const [doctorsData, setDoctorsData] = useState([]);

    useEffect(() => {
        const fetchDoctors = async () => {
            try {
                const response = await fetch("http://localhost:3555/register");
                const data = await response.json();
                setDoctorsData(data);
            } catch (err) {
                console.log(err);
            }
        }
        fetchDoctors();
    }, []);

    return (
        <div className="grid justify-items-center px-5 py-12">
            <ContextHeader
                heading="Our Doctors"
                Deatails="
                    No one shall be subjected to arbitrary arrest, detention or exile. Everyone is entitled in full equality to a fair and public hearing by an independent and impartial tribunal, in the determination of his rights and obligations and of any criminal charge against him.
                "
            />
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {
                    doctorsData.map((doctor,index) => (
                        <DoctorCards key={index}
                            imageUrl={doctor.image}
                             Speciality={doctor.specialty}
                             doctorsName={doctor.name}
                             basicDetails={doctor.basicDetails}/>
                    ))
                }
            </section>
        </div>
    )
}

// eslint-disable-next-line react/prop-types
const DoctorCards = ({imageUrl,Speciality,doctorsName,basicDetails}) => {
    return (
        <section className="grid grid-rows-[1fr] rounded-2xl overflow-hidden border-2 border-b-white bg-[#EFF0F1]">
            <img src={imageUrl} className="w-full" alt="" />
            <div className="px-6 py-4">
                <h3>{Speciality}</h3>
                <h1 className="text-2xl">{doctorsName}</h1>
                <p className="text-[1.1rem] py-2">{basicDetails}</p>
                <article className="flex items-center justify-between gap-4">
                    <Link to="/BookAppointment">
                        <Button Val={"Book now"}/>
                    </Link>
                    <h2 className={"text-xl"}>See More</h2>
                </article>
            </div>
        </section>
    )
}

export default OurDoctors;