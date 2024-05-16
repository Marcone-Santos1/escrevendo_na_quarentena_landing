import {MvvCard} from "./MvvCard.tsx";

export const MvvCardGroup = () => {

    return (
        <div className="flex flex-col w-full gap-2 justify-center items-center lg:flex-row">
            <div className="mt-24 flex flex-col p-6 w-5/6 shadow-lg gap-2 justify-center items-center md:p-14 lg:flex-row">
                <MvvCard
                    title="Missão"
                    content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi cupiditate debitis distinctio earum est fugit itaque maiores quam quas sed! Accusantium aspernatur beatae, consectetur cum debitis fugit necessitatibus omnis temporibus?"
                />
                <MvvCard
                    title="Visão"
                    content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi cupiditate debitis distinctio earum est fugit itaque maiores quam quas sed! Accusantium aspernatur beatae, consectetur cum debitis fugit necessitatibus omnis temporibus?"
                />
                <MvvCard
                    title="Valores"
                    content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi cupiditate debitis distinctio earum est fugit itaque maiores quam quas sed! Accusantium aspernatur beatae, consectetur cum debitis fugit necessitatibus omnis temporibus?"
                />
            </div>
        </div>
    );

}