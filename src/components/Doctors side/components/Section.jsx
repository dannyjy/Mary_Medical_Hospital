import RouteMovement from "../../../ui/RouteMovement.jsx";
import {RouteAppointmentsData} from "../../../data.jsx";

const Section = () => {
    return (
        <article className="flex-col gap-5 flex">
            {
                RouteAppointmentsData.map((routeAppointments,index) => (
                    <RouteMovement key={index}
                   location={routeAppointments.location}
                   DirectionName={routeAppointments.DirectionName}
                   Icon={routeAppointments.Icon}
                    />
                ))
            }
        </article>
    )
}

export default Section;