// eslint-disable-next-line react/prop-types
const AppointmentHeader = ({heading}) => {
    return(
        <div className="pb-10 max-lg:pt-4">
            <h1 className="text-4xl pb-4">{heading}</h1>
            <div className="border-b-gray-500 border-b-2"/>
        </div>
    )
}

export default AppointmentHeader;