import {Link} from "react-router-dom";

const Header = () => {
    return (
        <Link to="/home">
            <section className="flex gap-2 items-center max-lg:hidden">
                <div className="bg-[url('/Images/doctor1.jpg')] bg-center bg-cover h-14 w-14 rounded-[50%]"/>
                <aside>
                    <h1 className="text-white text-xl">Dr. John Doe</h1>
                    <h2 className="text-white text-sm">Genetic Specialist</h2>
                </aside>
            </section>
        </Link>
    )
}

export default Header;