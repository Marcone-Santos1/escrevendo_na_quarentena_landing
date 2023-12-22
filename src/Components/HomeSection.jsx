import notebook from '/svg/notebook.svg';
import Button from "./Button.jsx";

const HomeSection = () => {
    return (
        <div className="bg-[url('/img/Background.png')] bg-cover min-h-[100vh]">

            <div
                className="min-h-[100vh] max-w-4xl gap-6 mx-auto grid grid-cols-1 p-4 xl:max-w-5xl md:p-10 sm:p-6 lg:gap-x-20 lg:grid-cols-2 content-center items-center">
                <div className="flex flex-col gap-4 md:content-center">

                    <h1 className="text-gray-50 font-extrabold uppercase text-5xl">Escrevendo na Quarentena</h1>
                    <p className="text-gray-50">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>

                    <Button
                        className="bg-orange-dark p-2 w-52 rounded-lg"
                    >
                        <p className="text-gray-50 font-bold">Nos conheça</p>
                    </Button>
                </div>

                <div>
                    <img src={notebook} alt=""/>
                </div>


            </div>
        </div>
    );
}

export default HomeSection;