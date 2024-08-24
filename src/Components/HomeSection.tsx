import notebook from '/svg/notebook.svg';
import Button from "./Button.tsx";

export const HomeSection = () => {
    return (
        <div id="home" className="bg-[url('/img/Background.png')] bg-cover min-h-[100vh]">

            <div
                className="min-h-[100vh] max-w-4xl gap-16 mx-auto grid grid-cols-1 p-4 xl:max-w-[80%] md:p-10 sm:p-6 lg:gap-x-20 lg:grid-cols-2 content-center items-center"
            >
                <div className="flex flex-col gap-4 md:content-center text-center lg:text-left">

                    <h1 className="text-gray-50 font-extrabold uppercase text-5xl">Escrevendo na Quebrada</h1>
                    <p className="text-gray-50">
                        O Escrevendo na Quebrada, atualmente uma ONG, é um cursinho gratuito de redação que foi criado com o fito de democratizar a educação para jovens de baixa renda. O projeto visa, principalmente, abranger as possibilidades de acesso dos alunos de escola pública ao ensino superior. Os estudantes da ONG apresentaram ótimos resultados em dois anos de existência do EQ.
                    </p>

                    <Button
                        onClick={() => {
                            document.getElementById("about-us")?.scrollIntoView()
                        }}
                        className="block bg-orange-dark p-2 w-100 rounded-lg lg:w-52"
                    >
                        <p className="text-gray-800 font-bold">Nos conheça</p>
                    </Button>
                </div>

                <div>
                    <img className="hidden w-full h-full lg:block"
                         src={notebook} alt=""/>
                </div>


            </div>
        </div>
    );
}