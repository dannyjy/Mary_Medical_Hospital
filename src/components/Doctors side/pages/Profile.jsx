import {Link} from "react-router-dom";
import {CiLogout} from "react-icons/ci";
import { MdModeEdit } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaClock, FaPhoneAlt } from "react-icons/fa";
import { IoIosInformationCircle } from "react-icons/io";

const profile = () => {
    return(
        <div className="">
            <section className="flex items-center flex-wrap gap-5 pb-5 border-b-gray-500 border-b-2">
                <div className="bg-[url('/Images/doctor1.jpg')] bg-center bg-cover h-[250px] w-[250px] rounded-[50%]"/>
                <div className="">
                    <h1 className="text-4xl">Dr. John Doe</h1>
                    <h2 className="text-xl pb-3">Genetic Specialist</h2>
                    <h1 className="text-2xl">Email: john.doe@example.com</h1>
                    <h1 className="text-2xl">Phone: +44 1234567890</h1>
                </div>
            </section>
            <section className="pt-4">
                <Profile Icon1={<IoIosInformationCircle className="text-2xl"/>} title={"About"} description={
                    "A neurologyist, a medical doctor who specializes in diagnosing \n" +
                    "and treating diseases of the brain, spinal cord, and nerves.This \n" +
                    "can include muslces  diseases and disorders that affect \n" +
                    "thinking and behaviour."} />
                <Profile Icon1={<FaLocationDot className="text-2xl"/>} title={"Location"} description={"Gisozi Clinic, KG 684 St, Gisozi"} />
                <Profile Icon1={<FaPhoneAlt  className="text-2xl"/>} title={"Experience"} description={"15 years of experience"} />
                <Profile Icon1={<FaClock className="text-2xl"/>} title={"Education"} description={"BSc, University of London"} />
                <button className="" >
                    <Link to='/Login' className="flex items-center bg-[#DFE0E2] rounded-xl mt-8 ml-12 px-6 py-3 gap-2">
                        <CiLogout className="text-3xl" />
                        Log Out
                    </Link>
                </button>
            </section>
        </div>
    )
}

// eslint-disable-next-line react/prop-types
function Profile({Icon1,title,description,}) {
    return (
        <div className="flex items-center justify-between py-3">
            <aside className="flex gap-6 items-start">
                <div className="pt-2">{Icon1}</div>
                <section className="gap-2">
                    <h1 className="text-2xl font-medium">{title}</h1>
                    <h2 className="max-w-[500px]">{description}</h2>
                </section>
            </aside>
            <MdModeEdit className="text-2xl"/>
        </div>
    );
}

export default profile;