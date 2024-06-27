import {HomeSection} from "../Components/HomeSection.tsx";
import {CardMetion} from "../Components/CardMetion.tsx";
import {NavBar} from "../Components/NavBar.tsx";
import {CardGroup} from "../Components/CardGroup.tsx";
import {MvvCard} from "../Components/MvvCard.tsx";
import {PartOfCard} from "../Components/PartOfCard.tsx";
import {NewsCard} from "../Components/NewsCard.tsx";

import PersonImage from '/svg/person.svg';
import VemSerMembro from '/svg/VemSerMembro.svg';
import VemSerAluno from '/svg/VemSerAluno.svg';
import QueroDoar from '/svg/QueroDoar.svg';
import Jornal from '/svg/Jornal.svg';
import PodCast from '/svg/Podcast.svg';

export const HomePage = () => {
    return (
        <>
            <NavBar/>

            <HomeSection/>

            <CardGroup title={<h2>O que é o <span className="text-purple font-bold">EQ</span>?</h2>}
                       className="text-center lg:flex-col">
                <p>
                    O <span className="text-purple font-bold">E</span>screvendo na <span
                    className="text-purple font-bold">Q</span>uarentena, atualmente uma ONG, é um
                    cursinho gratuito de redação que foi criado com o fito de democratizar a educação para jovens de
                    baixa renda.
                </p>
                <p>
                    O projeto visa, principalmente, abranger as possibilidades de acesso dos alunos de escola pública ao
                    ensino superior.
                </p>
                <p>
                    Os estudantes da ONG apresentaram ótimos resultados em dois anos de existência do EQ, que
                    recentemente, iniciou mais um ano de aulas.
                </p>
            </CardGroup>

            <CardGroup
                title={<h2>Nosso trabalho vai muito além da <span className="text-purple font-bold">redação</span>!
                </h2>}>
                <NewsCard
                    title="Projeto ajuda estudantes a irem bem na redação do Enem"
                    description="Projeto é desenvolvido por professores do bairro Capão Redondo, na Zona Sul de São Paulo."
                    image={Jornal}
                />
                <NewsCard
                    title="‘Escrevendo na Quarentena’ promove cursos de redação gratuitos para jovens cidadãos de baixa renda"
                    description="Neste episódio vamos conversar com Allan Anjos e Cecília Oliveira, do Escrevendo na Quarentena. Um projeto que promove cursos de redação gratuitos para jovens cidadãos de baixa renda."
                    image={PodCast}
                />
            </CardGroup>

            <CardGroup title={<h2>Nossos resultados</h2>}>
                <CardMetion
                    name="Raissa"
                    description="Lorem ipsum dolor sit amet"
                    grade={940}
                    image={PersonImage}
                />
                <CardMetion
                    name="Raissa"
                    description="Lorem ipsum dolor sit amet"
                    grade={940}
                    image={PersonImage}
                />
                <CardMetion
                    name="Raissa"
                    description="Lorem ipsum dolor sit amet"
                    grade={940}
                    image={PersonImage}
                />
            </CardGroup>


            <CardGroup className="shadow-lg p-2 md:p-6 lg:p-16" title={<h2>MVV</h2>}>
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

            <CardGroup title={<h2>Faça parte!</h2>}>
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