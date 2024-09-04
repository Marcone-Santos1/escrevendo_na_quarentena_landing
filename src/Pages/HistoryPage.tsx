import {NavBar} from "../Components/NavBar.tsx";
import {useEffect, useRef, useState} from "react";
import {FaAward, FaGlobeAmericas, FaHandsHelping, FaLeaf} from "react-icons/fa";
import {motion} from 'framer-motion';
import {Footer} from "../Components/Footer.tsx";

export const HistoryPage = () => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const timelineRef = useRef<HTMLDivElement  | null>(null);

    const milestones = [
        {
            year: 2000,
            title: 'Foundation',
            description: 'Our NGO was founded with a vision to make a positive impact on the world.',
            icon: <FaLeaf className="text-green-500"/>,
            type: 'foundation'
        },
        {
            year: 2005,
            title: 'First Major Project',
            description: 'Launched our first major environmental conservation project in the Amazon rainforest.',
            icon: <FaGlobeAmericas className="text-blue-500"/>,
            type: 'project'
        },
        {
            year: 2010,
            title: 'International Expansion',
            description: 'Expanded our operations to 5 different countries across 3 continents.',
            icon: <FaHandsHelping className="text-purple-500"/>,
            type: 'expansion'
        },
        {
            year: 2015,
            title: 'Major Award',
            description: 'Received the Global Humanitarian Award for our efforts in sustainable development.',
            icon: <FaAward className="text-yellow-500"/>,
            type: 'achievement'
        },
        {
            year: 2020,
            title: '20th Anniversary',
            description: 'Celebrated 20 years of making a difference with a virtual global conference.',
            icon: <FaLeaf className="text-green-500"/>,
            type: 'anniversary'
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

    const getTypeColor = (type: string) => {
        switch (type) {
            case 'foundation':
                return 'bg-green-500';
            case 'project':
                return 'bg-blue-500';
            case 'expansion':
                return 'bg-purple-500';
            case 'achievement':
                return 'bg-yellow-500';
            case 'anniversary':
                return 'bg-green-500';
            default:
                return 'bg-gray-500';
        }
    };

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
                                            className={`w-6 h-6 rounded-full ${getTypeColor(milestone.type)} flex items-center justify-center`}>
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

