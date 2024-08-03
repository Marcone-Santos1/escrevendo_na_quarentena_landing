import {ReactNode} from "react";

interface FooterCardTitleI {
    title: string|ReactNode
}

export function FooterCardTitle({ title }: FooterCardTitleI) {
    return <div className="font-bold border-b-2 border-black">
        {title}
    </div>;
}