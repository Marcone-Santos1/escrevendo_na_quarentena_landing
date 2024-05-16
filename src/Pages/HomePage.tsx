import {HomeSection} from "../Components/HomeSection.tsx";
import {CardMetion} from "../Components/CardMetion.tsx";
import {NavBar} from "../Components/NavBar.tsx";
import {CardGroup} from "../Components/CardGroup.tsx";
import {MvvCard} from "../Components/MvvCard.tsx";
import {PartOfCard} from "../Components/PartOfCard.tsx";

import PersonImage from '/svg/person.svg';
import VemSerMembro from '/svg/VemSerMembro.svg';
import VemSerAluno from '/svg/VemSerAluno.svg';
import QueroDoar from '/svg/QueroDoar.svg';

export const HomePage = () => {
    return (
        <>
            <NavBar/>

            <HomeSection/>
            <CardGroup>
                <CardMetion
                    name="Raissa"
                    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam fuga molestias quae quisquam sapiente totam vel! Aliquam aspernatur delectus earum ipsam iste minus neque ratione repellendus veniam vero! Exercitationem, fugit?"
                    grade={940}
                    image={PersonImage}
                />
                <CardMetion
                    name="Raissa"
                    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam fuga molestias quae quisquam sapiente totam vel! Aliquam aspernatur delectus earum ipsam iste minus neque ratione repellendus veniam vero! Exercitationem, fugit?"
                    grade={940}
                    image={PersonImage}
                />
                <CardMetion
                    name="Raissa"
                    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam fuga molestias quae quisquam sapiente totam vel! Aliquam aspernatur delectus earum ipsam iste minus neque ratione repellendus veniam vero! Exercitationem, fugit?"
                    grade={940}
                    image={PersonImage}
                />
            </CardGroup>


            <CardGroup className="shadow-lg p-2 md:p-6 lg:p-16">
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
            </CardGroup>

            <CardGroup>
                <PartOfCard
                    image={VemSerMembro}
                />
                <PartOfCard
                    image={VemSerAluno}
                />
                <PartOfCard
                    image={QueroDoar}
                />

            </CardGroup>
        </>
    )
}