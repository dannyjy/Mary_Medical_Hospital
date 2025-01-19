const ContextHeader = ({heading,Deatails}) =>{
    return (
        <div className="">
            <h1 className={"text-4xl text-center pb-4"}>{heading}</h1>
            <p className={"text-xl pb-4 sm:px-4"}>{Deatails}</p>
        </div>
    )
}

export default ContextHeader;