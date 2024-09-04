import {NavBar} from "../Components/NavBar.tsx";
import {useEffect, useRef, useState} from "react";
import {FaAward, FaTrophy, FaLeaf} from "react-icons/fa";
import { PiTelevisionSimple } from "react-icons/pi";
import { FaLandmarkFlag } from "react-icons/fa6";
import { MdPublishedWithChanges } from "react-icons/md";


import {motion} from 'framer-motion';
import {Footer} from "../Components/Footer.tsx";

export const HistoryPage = () => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const timelineRef = useRef<HTMLDivElement  | null>(null);

    const milestones = [
        {
            year: 2020,
            title: 'Fundação',
            description: 'Em março de 2020, diante o agravamento do cenário pandêmico e migração das aulas para modelo EaD, a ideia de começar a ensinar redação online para os amigos mais próximos começou a ser fomentada na cabeça de três calouros universitários.',
            icon: <FaLeaf className="text-green-500"/>,
        },
        {
            year: 2020,
            title: 'Inicio',
            description: 'Assim, iniciava-se o primeiro ano do Escrevendo na Quarentena. O projeto reuniu inicialmente mais de 60 colaboradores de diversas universidades e um pouco mais de 80 alunos espalhados pelo Brasil.\n' +
                'Ainda, os estudantes atendidos pelo EQ nesse primeiro ano e que prestaram o Enem 2020 apresentaram ótimos resultados, como:\n' +
                '13 redações acima de 900\n' +
                ' e 8 redações entre 800 e 880',
            icon: <FaTrophy  className="text-blue-500"/>,
        },
        {
            year: 2020,
            title: 'Entrevista - Bom Dia São Paulo',
            description: 'Esses resultados surpreendentes nos trouxe visibilidade e fomos entrevistados pelo Bom Dia São Paulo.\n' +
                'Além disso, começou uma corrida contra o tempo para estruturar o EQ (que inicialmente, duraria somente um ano), e criar alicerces de um projeto embasado e capacitado para atender os estudantes que ainda seriam assolados pela defasagem no ensino público.',
            icon: <PiTelevisionSimple  className="text-blue-500"/>,
        },
        {
            year: 2021,
            title: 'Reformulação',
            description: 'Crescendo e buscando abranger o apoio prestado aos estudantes, a estrutura do EQ passou por uma reformulação e aprimoramento, visando ser capaz de atender mais alunos e melhorar a qualidade dos serviços oferecidos.\n' +
            'Iniciamos uma vaquinha, na qual todo dinheiro arrecadado foi destinado aos alunos e formalização do EQ como uma ONG.\n'+
            'Com o valor obtido, conseguimos fornecer tablet para três alunos, além de subsidiar a internet para acesso às aulas e a taxa de inscrição do Enem de outros 4 estudantes.',
            icon: <MdPublishedWithChanges className="text-orange-500"/>,
        },
        {
            year: 2021,
            title: 'Negresco',
            description: 'Ainda, no segundo ano do EQ, fizemos conexões para além do projeto e estabelecemos parcerias fundamentais para alcançarmos outros êxitos. Uma das mais notáveis foi o projeto ser finalista na iniciativa "Geração Que Faz Bem" da Nestlé,  ganhando mentorias estruturantes no decorrer de quatro meses e estampando as embalagens dos biscoitos Negresco.',
            icon: <FaAward className="text-yellow-500"/>,
        },
        {
            year: 2021,
            title: 'Consolidação',
            description: 'Com a estrutura pedagógica mais consolidada, os estudantes do  EQ de 2021 repetiram os feitos do ano anterior e apresentaram resultados tão satisfatórios quanto os anteriores.\n'+
            '12 redações acima de 900\n' +
            '20 redações entre 800 e 880\n'+
            '95% dos estudantes acreditam que o Escrevendo na Quarentena contribuiu nas notas.\n'+
            'Nossos corretores corrigiram o total de 359 redações, entregues no decorrer de 19 aulas.',
            icon: <FaLeaf className="text-green-500"/>,
        },
        {
            year: 2022,
            title: 'Escrevendo na Quarentena era oficializado como uma organização não governamental.',
            description: 'Em abril, conquistamos um dos nossos maiores êxitos nesses três anos de EQ. Dia 22/04, o Escrevendo na Quarentena era oficializado como uma organização não governamental. Após um longo período lidando com as burocracias, estávamos finalmente passando de um projeto para uma ONG. Mudança essa que nos possibilita inserção na prestação de serviços sociais. ',
            icon: <FaLandmarkFlag  className="text-yellow-500"/>,
        }
    ];

    useEffect(() => {
        const handleScroll = () => {

            const timeline = timelineRef.current;

            if (!timeline) return;

            const timelineRect = timeline.getBoundingClientRect();
            const timelineItems = timeline.querySelectorAll('.timeline-item');

            timelineItems.forEach((item, index) => {
                const itemRect = item.getBoundingClientRect();
                const itemMiddle = itemRect.top + itemRect.height / 2;

                if (itemMiddle >= timelineRect.top && itemMiddle <= timelineRect.bottom) {
                    setActiveIndex(index);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [timelineRef, setActiveIndex]);

    return (
        <>
            <NavBar activeColor={true}/>
            <div className="py-12 px-4 sm:px-6 lg:px-8" ref={timelineRef}>
                <div className="max-w-3xl mx-auto mt-24">
                    <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">Nossa História</h2>
                    <div className="relative">
                        {milestones.map((milestone, index) => (
                            <motion.div
                                key={milestone.year}
                                className={`timeline-item mb-8 flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
                                initial={{opacity: 0, y: 50}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.5, delay: index * 0.2}}
                            >
                                <div className={`w-1/2 ${index % 2 === 0 ? 'pl-8' : 'pr-8'}`}>
                                    <motion.div
                                        className={`p-4 bg-white rounded-lg shadow-md ${activeIndex === index ? 'ring-2 ring-offset-2 ring-blue-500' : ''}`}
                                        whileHover={{scale: 1.05}}
                                        transition={{type: 'spring', stiffness: 300}}
                                    >
                                        <h3 className="text-lg font-semibold text-gray-900">{milestone.title}</h3>
                                        <p className="text-sm text-gray-600 mt-2">{milestone.description}</p>
                                    </motion.div>
                                </div>
                                <div className="w-1/2 flex justify-center">
                                    <div className="relative">
                                        <div
                                            className={`w-6 h-6 rounded-full  flex items-center justify-center`}>
                                            {milestone.icon}
                                        </div>
                                        <div
                                            className="absolute top-8 left-1/2 transform -translate-x-1/2 text-sm font-semibold text-gray-700">
                                            {milestone.year}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                        <div className="absolute h-full w-0.5 bg-gray-300 left-1/2 transform -translate-x-1/2 top-0"></div>
                    </div>
                </div>
            </div>
            <Footer />
        </>

    );
};

