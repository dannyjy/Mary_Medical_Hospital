export default function RouteMovement({Icon, DirectionName}) {
    return (
        <div className="grid justify-items-center lg:flex lg:items-center gap-2">
            <section>{Icon}</section>
            <li className="list-none text-[.8rem] text-center lg:text-xl text-white">{DirectionName}</li>
        </div>
    )
}