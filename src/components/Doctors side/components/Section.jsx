import {Link} from "react-router-dom";
import {ImCancelCircle} from "react-icons/im";
import { SiTicktick } from "react-icons/si";
import { FaRegShareSquare } from "react-icons/fa";
import { FaCalendarCheck } from "react-icons/fa6";
import RouteMovement from "../../../ui/RouteMovement.jsx";

const Section = () => {
    return (
        <article className="px-2 lg:flex-col lg:gap-5 flex gap-5">
            <Link to="/home/Appointments">
                <RouteMovement Icon={<FaCalendarCheck className="text-3xl"/>} DirectionName={"Appointments"}/>
            </Link>
            <Link to="/home/Cancelled">
                <RouteMovement Icon={<ImCancelCircle className="text-3xl"/>} DirectionName={"Cancelled"}/>
            </Link>
            <Link to="/home/Completed">
                <RouteMovement Icon={<SiTicktick className="text-3xl"/>} DirectionName={"Completed"}/>
            </Link>
            <Link to="/home/Rescheduled">
                <RouteMovement Icon={<FaRegShareSquare className="text-3xl"/>} DirectionName={"Rescheduled"}/>
            </Link>
        </article>
    )
}

export default Section;