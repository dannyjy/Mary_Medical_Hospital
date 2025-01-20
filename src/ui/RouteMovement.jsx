import {Link} from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function RouteMovement({location,Icon, DirectionName}) {
    return (
        <Link to={location} className="focus:bg-[#DFE0E2] hover:bg-[#DFE0E2] rounded-xl px-2 py-4">
            <div className="flex items-center gap-6 px-10">
                <section>{Icon}</section>
                <li className="list-none text-center text-xl">{DirectionName}</li>
            </div>
        </Link>
    )
}