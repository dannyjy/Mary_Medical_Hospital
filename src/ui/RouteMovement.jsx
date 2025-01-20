// eslint-disable-next-line react/prop-types
export default function RouteMovement({Icon, DirectionName}) {
    return (
        <div className="flex items-center gap-2">
            <section>{Icon}</section>
            <li className="list-none text-center text-xl">{DirectionName}</li>
        </div>
    )
}