interface cardMetionProp {
    image: string
}

export const PartOfCard =  ({ image }: cardMetionProp) => {

    return (
        <div className="relative flex flex-col text-gray-700 md bg-clip-border rounded-2xl">
            <div className="relative mx-auto mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border !rounded-full border-8 border-white">
                <img src={image} alt="profile-picture" className="max-w-full w-full max-h-full h-full" />
            </div>
        </div>
    )

}