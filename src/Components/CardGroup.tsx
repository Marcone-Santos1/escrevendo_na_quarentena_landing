import {ReactNode} from "react";
import {twMerge} from "tailwind-merge";

interface CardGroupProps {
    children: ReactNode,
    className?: string
}


export const CardGroup = ({ children, className }: CardGroupProps) => {

    return (
        <div className="flex flex-col w-full gap-2 justify-center items-center lg:flex-row">
            <div className={twMerge('mt-24 flex flex-col w-5/6 gap-2 justify-center items-center lg:flex-row', className)}>
                { children }
            </div>
        </div>
    );

}