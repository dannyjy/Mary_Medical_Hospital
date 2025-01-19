import { CiLogout } from "react-icons/ci";
import RouteMovement from "../../../ui/RouteMovement.jsx";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <div className="max-lg:hidden">
            <Link to="/">
                <RouteMovement Icon={<CiLogout className="text-3xl" />} DirectionName={"Log Out"}/>
            </Link>
        </div>
    )
}

export default Footer;