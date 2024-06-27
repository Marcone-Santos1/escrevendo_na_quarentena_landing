import {ReactNode} from "react";
import {twMerge} from "tailwind-merge";

interface CardGroupProps {
    children: ReactNode,
    className?: string
    titleClassName?: string
    title?: string|ReactNode,
    id?: string
}


export const CardGroup = ({ children, className, title, titleClassName, id }: CardGroupProps) => {

    return (

        <>
            <div className="flex flex-col justify-center items-center" id={id}>
                <div className={twMerge('text-center text-5xl mb-12 max-w-xl mt-24', titleClassName)}>
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