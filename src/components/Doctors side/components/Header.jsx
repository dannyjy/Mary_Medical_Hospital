import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

const Header = () => {
    const [user,setUser] = useState({});

    useEffect(() => {
        let userData = sessionStorage.getItem('user');
        if(userData == null){
            userData = {}
        }else{
            userData = JSON.parse(userData)
        }
        setUser(userData)
    }, []);

    return (
        <div>
            <Link to="/home">
                <section className="flex gap-2 items-center flex-wrap pt-7 pb-3 px-5">
                    <div className="bg-[url('/Images/userProfile.svg')] bg-center bg-cover h-14 w-14 rounded-[50%]"/>
                    <aside>
                        <h1 className="text-xl">Dr. {user&&user.name}</h1>
                        <h2 className="text-sm">{user&&user.specialty}</h2>
                    </aside>
                </section>
            </Link>
            <div className="border-2 border-b-gray-700"/>
        </div>
    )
}

export default Header;