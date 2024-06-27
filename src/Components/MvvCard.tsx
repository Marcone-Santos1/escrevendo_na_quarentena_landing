
interface MvvCardProps {
    title: string,
    content: string
}

export const MvvCard = ({ title, content }: MvvCardProps) => {

    return (
        <div className="relative flex flex-col text-gray-700 bg-clip-border sm:w-72 md:w-80 lg:w-96 xl:w-104">

            <div className="p-6 text-center">
                <h3 className="block mb-2 font-sans text-2xl antialiased leading-snug tracking-normal text-gray-600 font-bold">
                    {title}
                </h3>

                <p className="block font-sans text-base antialiased font-medium leading-relaxed text-gray-600">
                    {content}
                </p>
            </div>
        </div>
    );

}