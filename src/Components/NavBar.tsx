import {useEffect, useState} from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import Button from "./Button.tsx";
export const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [navbarScroll, setNavbarScroll] = useState(false)

    const navLinks = [
        { href: "#home", label: "Home" },
        { href: "#about-us", label: "About Us" },
        { href: "#products", label: "Products" },
        { href: "#contact-us", label: "Contact Us" },
    ];

    const changeBackground = () => {
        if (window.scrollY >= 1000) {
            setNavbarScroll(true)
        } else {
            setNavbarScroll(false)
        }
    }

    useEffect(() => {
        changeBackground()
        window.addEventListener("scroll", changeBackground)
    })

    return (
        <>
            <header className="sm:px-8 px-4 py-2 z-10 w-full fixed">
                <nav className="flex justify-between items-center max-container">
                    <a href="/" className={`text-3xl text-gray-50 ${navbarScroll ? 'text-gray-500' : 'text-gray-50'}`}>
                        Logo
                    </a>

                    <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
                        {navLinks.map((item) => (
                            <li key={item.label}>
                                <a
                                    href={item.href}
                                    className={`font-montserrat leading-normal text-lg ${!navbarScroll ? 'text-gray-50' : 'text-gray-700'}`}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24">
                        <Button className={
                            `rounded-xl py-1.5 text-gray-800 ${navbarScroll ? 'bg-black text-gray-50' : 'bg-white'}`
                        }>
                            Login
                        </Button>
                    </div>

                    <div
                        className="hidden max-lg:block cursor-pointer"
                        onClick={() => {
                            setIsMenuOpen(!isMenuOpen);
                        }}
                    >
                        {isMenuOpen ? <AiOutlineClose className="text-4xl" /> : <RxHamburgerMenu className="text-4xl text-gray-50" />}
                    </div>
                </nav>
            </header>
            {isMenuOpen && (
                <div>
                    <nav className="fixed top-0 right-0 left-0 bottom-0 lg:bottom-auto bg-slate-100  ">
                        <ul className=" lg:hidden flex flex-col items-center justify-center h-full gap-5">
                            {navLinks.map((item) => (
                                <li key={item.label}>
                                    <a
                                        href={item.href}
                                        className="font-montserrat leading-normal text-lg text-gray-700"
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                            <Button className={
                                "bg-white rounded-xl py-1.5 text-gray-50" +
                                (isMenuOpen && " bg-fuchsia-700")
                            }>
                                Login
                            </Button>
                        </ul>
                    </nav>
                </div>
            )}
        </>
    );
};

