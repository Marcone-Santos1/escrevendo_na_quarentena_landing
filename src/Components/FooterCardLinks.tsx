import {Link} from "react-router-dom";
import {NavLinksI} from "../Contracts/NavLinksI.ts";

interface FooterCardItemI {
    links: NavLinksI[],
}

export function FooterCardLinks({ links }: FooterCardItemI) {

    return <ul className="text-center flex flex-col gap-4 font-medium">
        {links.map((item) => (
            <li key={item.label} className="list-none">

                {item.externalLink ? (
                    <Link
                        to={`${item.href}`}
                        className={`font-montserrat leading-normal text-gray-700}`}
                    >
                        {item.label}
                    </Link>
                ) : (
                    <a
                        href={item.href}
                        className={`font-montserrat leading-normal text-gray-700}`}
                    >
                        {item.label}
                    </a>
                )}

            </li>
        ))}
    </ul>
}