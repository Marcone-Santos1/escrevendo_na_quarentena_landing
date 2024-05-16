import {ReactNode} from "react";

interface CardGroupProps {
    children: ReactNode,
}


export const CardGroup = ({ children }: CardGroupProps) => {

    return (
        <div className="flex flex-col w-full gap-2 justify-center items-center lg:flex-row">
            <div className="mt-24 flex flex-col w-5/6 gap-2 justify-center items-center lg:flex-row">
                { children }
            </div>
        </div>
    );

}