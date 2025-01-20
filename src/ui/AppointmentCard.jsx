// eslint-disable-next-line react/prop-types
const AppointmentCard = ({name,date,time,description,age,contact}) =>{
    return(
        <div className="bg-[#EFF0F1] p-4 rounded-xl shadow-[#ddd] shadow">
            <article className="flex justify-between items-center">
                <section>
                    <h1 className="text-2xl">{name}</h1>
                    <h2 className="text-gray-600">{age} years old</h2>
                </section>
                <h3 className="text-gray-500">{contact}</h3>
            </article>
            <p className="py-2">{description}</p>
            <section className="flex justify-between items-center">
                <h1 className="">{date}</h1>
                <h2 className="">{time}</h2>
            </section>
        </div>
    )
}

export default AppointmentCard;