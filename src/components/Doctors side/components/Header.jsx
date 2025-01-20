import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <Link to="/home">
                <section className="flex gap-2 items-center flex-wrap pb-3">
                    <div className="bg-[url('/Images/doctor1.jpg')] bg-center bg-cover h-14 w-14 rounded-[50%]"/>
                    <aside>
                        <h1 className="text-xl">Dr. John Doe</h1>
                        <h2 className="text-sm">Genetic Specialist</h2>
                    </aside>
                </section>
            </Link>
            <div className="border-2 border-b-gray-700"/>
        </div>
    )
}

export default Header;