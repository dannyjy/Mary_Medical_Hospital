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
                            <div>
                                <Link to="/">
                                    <li>Home</li>
                                </Link>
                            </div> <div>
                                <Link to="/">
                                    <li>About Us</li>
                                </Link>
                            </div>
                        </ul>
                            <div>
                                <Link to="/login">
                                    <Button Val={"Log In"}/>
                                </Link>
                            </div><div>
                                <Link to="/bookAppointment">
                                    <Button Val={"Book now"}/>
                                </Link>
                            </div>
                    </nav>
                    {isMenuOpen ? <IoIosClose className="text-4xl text-white lg:hidden" onClick={handleMenuOpen}/> : <IoMdMenu className="text-4xl text-white lg:hidden" onClick={handleMenuOpen}/>}
                    {
                        isMenuOpen &&
                        <nav className="absolute top-20 right-2 bg-[#80808080] rounded w-full h-[86%] flex justify-center align-center lg:hidden">
                            <section>
                                <ul className="text-white text-xl">
                                    <li>Home</li>
                                    <li>AboutUs</li>
                                </ul>
                                <div>
                                    <Link to="/login">
                                        <Button Val={"Log In"}/>
                                    </Link>
                                </div><div>
                                <Link to="/bookAppointment">
                                    <Button Val={"Book now"}/>
                                </Link>
                            </div>
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