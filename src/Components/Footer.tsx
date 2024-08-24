import {FooterCardTitle} from "./FooterCardTitle.tsx";
import {FooterCard} from "./FooterCard.tsx";
import {FooterCardLinks} from "./FooterCardLinks.tsx";
import {useLocation} from "react-router-dom";
import {isHomePage} from "../Helpers/Helper.ts";


import {NavLinksI} from "../Contracts/NavLinksI.ts";
import FacebookImage from '/svg/facebook.svg';
import InstagramImage from '/svg/instagram.svg';


export const Footer = () => {

    const location = useLocation();
    const {pathname} = location;

    const resoursesBar: NavLinksI[] = [
        {href: "/", label: "Edital", externalLink: true },
    ];
    const joinUs: NavLinksI[] = [
        {href: "/", label: "Como apoiar", externalLink: true },
        {href: "/", label: "Seja um voluntário", externalLink: true},
        {href: "/", label: "Parcerias", externalLink: isHomePage(pathname) },
    ]
    const ConnectToEQ: NavLinksI[] = [
        {href: "mailto:escrevendoquarentena.rh@gmail.com", label: "E-mail", externalLink: true},
    ];

    return (
        <footer className="w-full bg-blue-light-xs min-h-96 mt-24 p-8">

            <div className="flex flex-col justify-around content-center items-center p-8 sm:flex-row sm:items-start gap-8">

                <FooterCard>
                    <FooterCardTitle title={<h2>Barra de recursos</h2>}/>
                    <FooterCardLinks links={resoursesBar} />
                </FooterCard>
                <FooterCard>
                    <FooterCardTitle title={<h2>Junte-se a nós</h2>}/>
                    <FooterCardLinks links={joinUs} />
                </FooterCard>
                <FooterCard>
                    <FooterCardTitle title={<h2>Conecte-se ao <span className="text-purple font-bold">EQ</span></h2>}/>
                    <div className="flex flex-col gap-4 items-center">
                        <div className="flex gap-2">
                            <img className="cursor-pointer" src={FacebookImage} alt="" onClick={() => window.open('https://www.instagram.com/escrevendonaquarentena/')}/>
                            <img className="cursor-pointer" src={InstagramImage} alt="" onClick={() => window.open('https://www.facebook.com/Escrevendonaquarentena/')}/>
                        </div>
                        <FooterCardLinks links={ConnectToEQ}/>
                    </div>
                </FooterCard>

            </div>

        </footer>
    );
};

