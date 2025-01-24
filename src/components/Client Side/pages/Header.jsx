import React from "react";
import Button from "../../../ui/Button.jsx";
import { IoMdMenu, IoIosClose } from "react-icons/io";
import {Link} from "react-router-dom";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const handleMenuOpen = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    return (
        <div className="bg-[url('/Images/MainhopitalImage.jpg')] bg-center bg-cover relative">
            <div className="w-full h-full backdrop-brightness-50 bg-black/30 px-4 lg:px-16 py-10">
                <header className="flex items-center justify-between ">
                    <h1 className="text-2xl lg:text-4xl text-white font-semibold">MARY MEDICAL HOSPITAL</h1>
                    <nav className="flex items-center justify-between gap-4 bg-[#80808080] px-5 py-4 rounded-2xl max-lg:hidden">
                        <ul className="flex items-center justify-between gap-4 text-white text-xl ">
                            <div className="flex gap-4">
                                <Link to="/">
                                    <li>Home</li>
                                </Link>
                                <Link to="/AboutUs">
                                    <li>About Us</li>
                                </Link>
                            </div>
                        </ul>
                        <Link to="/CheckAppointment">
                            <Button Val={"Check Appointment"}/>
                        </Link>
                        <Link to="/bookAppointment">
                            <Button Val={"Book now"}/>
                        </Link>
                    </nav>
                    {isMenuOpen ? <IoIosClose className="text-4xl text-white lg:hidden" onClick={handleMenuOpen}/> : <IoMdMenu className="text-4xl text-white lg:hidden" onClick={handleMenuOpen}/>}
                    {
                        isMenuOpen &&
                        <nav className="absolute text-center gap-2 top-20 right-0 bg-[#EFF0F1] rounded w-full h-screen flex justify-center items-center lg:hidden">
                            <section className="flex flex-col justify-center">
                                <ul className="font-medium text-xl pb-4">
                                    <Link to="/">
                                        <li>Home</li>
                                    </Link>
                                    <Link to="/AboutUs">
                                        <li>About Us</li>
                                    </Link>
                                </ul>
                                <Link to="/bookAppointment">
                                    <Button Val={"Book now"}/>
                                </Link>
                            </section>
                        </nav>
                    }
                </header>
                <section className="py-28 grid justify-items-center text-center">
                    <h1 className="text-white text-4xl lg:text-6xl">WELCOME TO  MARY MEDICAL HOSPITAL</h1>
                    <p className="text-white text-xl lg:w-[800px] pt-4">
                        No one shall be subjected to arbitrary arrest, detention or exile. Everyone is entitled in full equality to a fair and public hearing by an independent and impartial tribunal, in the determination of his rights and obligations and of any criminal charge against him. No one shall be subjected to arbitrary interference with his privacy, family, home or correspondence, nor to attacks upon his honour and reputation.
                    </p>
                </section>
            </div>
        </div>
    )
}

export default Header;