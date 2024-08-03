import {ReactNode} from "react";

interface FooterCardI {
    children: ReactNode,
}

export function FooterCard({ children }: FooterCardI) {
    return <div className="flex flex-col gap-4 items-center">
        {children}
    </div>;
}