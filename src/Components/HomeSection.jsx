import notebook from '/svg/notebook.svg';

const HomeSection = () => {
    return (
        <div className="bg-[url('/img/Background.png')] bg-cover min-h-[100vh]">

            <h1>Escrevendo na Quarentena</h1>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>

            <img src={notebook} alt=""/>
        </div>
    );
}

export default HomeSection;