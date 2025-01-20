import {Link} from "react-router-dom";
import { SiTicktick } from "react-icons/si";
import { FaCalendarCheck } from "react-icons/fa6";
import { FaRegShareSquare,FaTrash } from "react-icons/fa";
import RouteMovement from "../../../ui/RouteMovement.jsx";

const Section = () => {
    return (
        <article className="px-2 flex-col gap-5 flex">
            <Link to="/home/Appointments" className="focus:bg-[#DFE0E2] hover:bg-[#DFE0E2] rounded-xl px-2 py-4 ">
                <RouteMovement Icon={<FaCalendarCheck className="text-3xl"/>} DirectionName={"Appointments"}/>
            </Link>
            <Link to="/home/Cancelled" className="focus:bg-[#DFE0E2] hover:bg-[#DFE0E2] rounded-xl px-2 py-4">
                <RouteMovement Icon={<FaTrash className="text-3xl"/>} DirectionName={"Cancelled"}/>
            </Link>
            <Link to="/home/Completed" className="focus:bg-[#DFE0E2] hover:bg-[#DFE0E2] rounded-xl px-2 py-4">
                <RouteMovement Icon={<SiTicktick className="text-3xl"/>} DirectionName={"Completed"}/>
            </Link>
            <Link to="/home/Rescheduled" className="focus:bg-[#DFE0E2] hover:bg-[#DFE0E2] rounded-xl px-2 py-4">
                <RouteMovement Icon={<FaRegShareSquare className="text-3xl"/>} DirectionName={"Rescheduled"}/>
            </Link>
        </article>
    )
}

export default Section;