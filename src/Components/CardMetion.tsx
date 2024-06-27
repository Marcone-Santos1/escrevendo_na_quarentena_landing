interface cardMetionProp {
    name: string,
    grade: number,
    description: string,
    image: string
}

export const CardMetion = ({ name, grade, description, image }: cardMetionProp) => {

    return (
        <div className="relative flex flex-col text-gray-700 bg-blue-light-xs shadow-md bg-clip-border rounded-2xl lg:w-2/5">
            <div className="relative mx-auto mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border w-44 !rounded-full border-8 border-white">
                <img src={image} alt="profile-picture" className="w-44" />
            </div>
            <div className="p-6 text-center">
                <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-purple">
                    { name }
                </h4>

                <p className="block font-sans text-base antialiased font-bold leading-relaxed text-black">
                    { grade }
                </p>

                <p className="block font-sans text-base antialiased font-medium leading-relaxed text-white">
                    { description }
                </p>
            </div>
        </div>
    )

}