export const CardMetions = () => {

    return (
        <div className="relative flex flex-col text-gray-700 bg-blue-light-xs shadow-md bg-clip-border w-96 rounded-2xl">
            <div
                className="relative mx-auto mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border w-52 !rounded-full border-8 border-white">
                <img src="/img/person.svg" alt="profile-picture" className="w-full" />
            </div>
            <div className="p-6 text-center">
                <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-purple">
                    Raissa
                </h4>

                <p
                    className="block font-sans text-base antialiased font-bold leading-relaxed text-black">
                    940
                </p>

                <p
                    className="block font-sans text-base antialiased font-medium leading-relaxed text-white">
                    “Meu desempenho foi uma grande evolução”
                </p>
            </div>
        </div>
    )

}