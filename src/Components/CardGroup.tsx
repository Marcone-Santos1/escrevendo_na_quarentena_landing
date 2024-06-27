import {ReactNode} from "react";
import {twMerge} from "tailwind-merge";

interface CardGroupProps {
    children: ReactNode,
    className?: string
    titleClassName?: string
    title?: string|ReactNode
}


export const CardGroup = ({ children, className, title, titleClassName }: CardGroupProps) => {

    return (

        <>
            <div className="mt-24 flex flex-col justify-center items-center">
                <div className={twMerge('text-center text-5xl mb-12 max-w-xl', titleClassName)}>
                    { title }
                </div>
                <div className="flex flex-col w-full gap-2 justify-center items-center lg:flex-row">
                    <div
                        className={twMerge('flex flex-col w-2/3 gap-6 justify-center items-center lg:flex-row', className)}>
                        {children}
                    </div>
                </div>
            </div>

        </>


    );

}