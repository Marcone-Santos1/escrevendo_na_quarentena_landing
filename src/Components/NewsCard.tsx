interface cardMetionProp {
    title: string,
    description: string,
    image: string
}

export const NewsCard = ({ title, description, image }: cardMetionProp) => {

    return (
        <div className="flex flex-col text-gray-700 p-6 shadow-md bg-clip-border rounded-2xl m-w-1/2 w-full max-h-[480px] h-full">
            <div className="mx-auto mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border w-11/12 h-80">
                <img src={image} alt="profile-picture" className="w-full object-fill" />
            </div>
            <div className="p-4 text-justify">
                <h4 className="block mb-2 font-sans text-sm lg:text-base antialiased font-bold leading-snug tracking-normal text-gray-800">
                    { title }
                </h4>

                <p className="block font-sans text-justify text-sm lg:text-base antialiased font-medium leading-relaxed text-gray-600">
                    { description }
                </p>
            </div>
        </div>
    )

}