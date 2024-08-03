import {useEffect, useState} from "react";
import {RxHamburgerMenu} from "react-icons/rx";
import {AiOutlineClose} from "react-icons/ai";

import {Link, useLocation} from "react-router-dom";

import {NavLinksI} from "../Contracts/NavLinksI.ts";

import Button from "./Button.tsx";
import {isHomePage} from "../Helpers/Helper.ts";

export const NavBar = () => {

    const location = useLocation();
    const {pathname} = location;

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [navbarScroll, setNavbarScroll] = useState(false)

    useEffect(() => {
        isMenuOpen ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'unset';
    }, [isMenuOpen]);

    useEffect(() => {
        changeBackground()
        window.addEventListener("scroll", changeBackground)
    })

    const navLinks: NavLinksI[] = [
        {href: "/#home", label: "Home", externalLink: isHomePage(pathname) },
        {href: "/#about-us", label: "Sobre nós", externalLink: isHomePage(pathname) },
        {href: "/#our-results", label: "Resultados", externalLink: isHomePage(pathname) },
        {href: "/history", label: "History", externalLink: true},
        {href: "/#MVV", label: "MVV", externalLink: isHomePage(pathname) },
        {href: "/#join", label: "Faça Parte", externalLink: isHomePage(pathname) },
    ];

    const changeBackground = () => {
        if (window.scrollY >= window.innerHeight) {
            setNavbarScroll(true)
        } else {
            setNavbarScroll(false)
        }
    }

    return (
        <>
            <header className={`sm:px-8 px-4 py-2 z-10 w-full fixed ${!navbarScroll ? '' : 'bg-blue-light-xs'}`}>
                <nav className="flex justify-between items-center max-container">
                    <Link
                        to={`/`}
                        className={`text-3xl text-gray-50 ${navbarScroll ? 'text-gray-500' : 'text-gray-50'}`}
                    >
                        Logo
                    </Link>

                    <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
                        {navLinks.map((item) => (
                            <li key={item.label}>

                                {item.externalLink ? (
                                    <Link
                                        to={`${item.href}`}
                                        className={`font-montserrat leading-normal text-lg ${!navbarScroll ? 'text-gray-50' : 'text-gray-700'}`}
                                    >
                                        {item.label}
                                    </Link>
                                ) : (
                                    <a
                                        href={item.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className={`font-montserrat leading-normal text-lg ${!navbarScroll ? 'text-gray-50' : 'text-gray-700'}`}
                                    >
                                        {item.label}
                                    </a>
                                )}

                            </li>
                        ))}
                    </ul>

                    <div
                        className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24">
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
                        {isMenuOpen ? <AiOutlineClose className="text-4xl"/> :
                            <RxHamburgerMenu className="text-4xl text-gray-50"/>}
                    </div>
                </nav>
            </header>
            {isMenuOpen && (
                <div className="fixed top-0 right-0 left-0 bottom-0 lg:bottom-auto bg-slate-100 z-50">
                    <div
                        className="hidden max-lg:block cursor-pointer p-4"
                        onClick={() => {
                            setIsMenuOpen(!isMenuOpen);
                        }}
                    >
                    {isMenuOpen ? <AiOutlineClose className="text-4xl"/> :
                            <RxHamburgerMenu className="text-4xl text-gray-50"/>}
                    </div>
                    <nav className="flex flex-col items-center justify-center h-[calc(100vh+1rem)] ">

                        <ul className="lg:hidden flex flex-col items-center justify-center gap-5">
                            {navLinks.map((item) => (
                                <li key={item.label}>
                                    {item.externalLink ? (
                                        <Link
                                            to={`${item.href}`}
                                            className="font-montserrat leading-normal text-lg text-gray-700"
                                        >
                                            {item.label}
                                        </Link>
                                    ) : (
                                        <a
                                            href={item.href}
                                            onClick={() => setIsMenuOpen(false)}
                                            className="font-montserrat leading-normal text-lg text-gray-700"
                                        >
                                            {item.label}
                                        </a>
                                    )}
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

