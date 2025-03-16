import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Import hamburger and close icons
import { Link } from "react-router"; 

const Nav: React.FC = () => {
    const [open, setOpen] = useState(false); // State for the dropdown menu

    // Function to handle smooth scrolling
    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
            setOpen(false); // Close menu on mobile after clicking
        }
    };

    return (
        <div className="relative items-center pb-2">
            {/* Logo */}
            <div className="absolute left-10 ml-4 z-10 md:block hidden">
                <a href="/">
                    <img
                        src="/images/logo_2.png"
                        alt="Logo"
                        className="h-26 w-26"
                    />
                </a>
            </div>

            {/* Navbar */}
            <div className="text-center pt-6 navbar-shadow">
                {/* Navigation Menu */}
                <div className="mt-4 flex flex-col sm:flex-row xl:justify-end xl:items-center text-center">
                    <div className="w-full xl:w-1/3 space-y-4 xl:space-y-0 xl:space-x-16 text-center justify-center">
                        
                        {/* Hamburger menu for small screens */}
                        <div className="flex relative bottom-2 justify-end items-center mr-8 xl:hidden mt-4">
                            <button onClick={() => setOpen(!open)} className="text-2xl">
                                {open ? <FaTimes /> : <FaBars />}
                            </button>
                        </div>

                        {/* Nav Links */}
                        <div
                            className={`text-gray-900 flex flex-col xl:flex-row xl:space-x-8 space-y-2 xl:space-y-0 xl:justify-center ${
                                open ? "block" : "hidden"
                            } xl:block`}
                        >
                            <button
                                onClick={() => scrollToSection("servicios")}
                                className="font-1-semibold text-lg text-custom-red hover:text-custom-blue transition-colors duration-700 underline-effect"
                            >
                                SERVICIOS
                            </button>
                            <button
                                onClick={() => scrollToSection("precios")}
                                className="font-1-semibold text-lg text-custom-red hover:text-custom-blue transition-colors duration-700 underline-effect"
                            >
                                PRECIOS
                            </button>
                            <Link
                                to="/about-us"
                                className="font-1-semibold text-lg text-custom-red hover:text-custom-blue transition-colors duration-700 underline-effect"
                            >
                                CONOCENOS
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;
