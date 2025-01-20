// eslint-disable-next-line react/prop-types
const ContextHeader = ({heading,Deatails}) =>{
    return (
        <div className="pb-8">
            <h1 className={"text-4xl text-center pb-4"}>{heading}</h1>
            <p className={"text-xl sm:px-4"}>{Deatails}</p>
        </div>
    )
}

export default ContextHeader;