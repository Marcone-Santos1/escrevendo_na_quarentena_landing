import {HomeSection} from "../Components/HomeSection.tsx";
import {CardMetion} from "../Components/CardMetion.tsx";
import {NavBar} from "../Components/NavBar.tsx";
import {CardGroup} from "../Components/CardGroup.tsx";
import {MvvCard} from "../Components/MvvCard.tsx";
import {PartOfCard} from "../Components/PartOfCard.tsx";
import {NewsCard} from "../Components/NewsCard.tsx";
import {Footer} from "../Components/Footer.tsx";

import PersonImage from '/svg/person.svg';
import VemSerMembro from '/svg/VemSerMembro.svg';
import VemSerAluno from '/svg/VemSerAluno.svg';
import QueroDoar from '/svg/QueroDoar.svg';
import Jornal from '/svg/Jornal.svg';
import PodCast from '/svg/Podcast.svg';

export const HomePage = () => {
    return (
        <>
            <NavBar activeColor={false}/>

            <HomeSection/>

            <CardGroup
                title={<h2>O que é o <span className="text-purple font-bold">EQ</span>?</h2>}
                className="text-center lg:flex-col"
                id="about-us"
            >
                <p>
                    O <span className="text-purple font-bold">E</span>screvendo na <span
                    className="text-purple font-bold">Q</span>uebrada, atualmente uma ONG, é um
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
                </h2>}
                id="our-results"
            >
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


            <CardGroup className="shadow-lg p-2 md:p-6 lg:p-16" title={<h2>MVV</h2>} id="MVV">
                <MvvCard
                    title="Missão"
                    content="Promover o desenvolvimento crítico e a transformação da vida das pessoas, por meio de ações educativas e culturais, proporcionando o acesso ao ensino superior e a prática da cidadania."
                />
                <MvvCard
                    title="Visão"
                    content="Ser referência nacional em educação gratuita e de qualidade, promovendo um Brasil justo, equitativo e solidário."
                />
                <MvvCard
                    title="Valores"
                    content="Empatia, Horizontalidade, Comprometimento, Respeito, Humanidade, Diversidade e Equidade"
                />
            </CardGroup>

            <CardGroup title={<h2>Faça parte!</h2>} id="join">
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

            <Footer />
        </>
    )
}