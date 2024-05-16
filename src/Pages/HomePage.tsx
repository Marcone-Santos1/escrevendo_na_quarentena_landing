import {HomeSection} from "../Components/HomeSection.tsx";
import {CardMetion} from "../Components/CardMetion.tsx";
import {NavBar} from "../Components/NavBar.tsx";
import {MvvCardGroup} from "../Components/MvvCardGroup.tsx";

export const HomePage = () => {
    return (
        <>
            <NavBar/>

            <HomeSection/>
            <div className="flex flex-col w-full gap-2 justify-center items-center lg:flex-row">
                <div className="mt-24 flex flex-col p-6 w-5/6 gap-2 justify-center items-center lg:flex-row">
                <CardMetion
                    name="Raissa"
                    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam fuga molestias quae quisquam sapiente totam vel! Aliquam aspernatur delectus earum ipsam iste minus neque ratione repellendus veniam vero! Exercitationem, fugit?"
                    grade={940}
                />
                <CardMetion
                    name="Raissa"
                    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam fuga molestias quae quisquam sapiente totam vel! Aliquam aspernatur delectus earum ipsam iste minus neque ratione repellendus veniam vero! Exercitationem, fugit?"
                    grade={940}
                />
                <CardMetion
                    name="Raissa"
                    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam fuga molestias quae quisquam sapiente totam vel! Aliquam aspernatur delectus earum ipsam iste minus neque ratione repellendus veniam vero! Exercitationem, fugit?"
                    grade={940}
                />
                </div>
            </div>

            <MvvCardGroup  />
        </>
    )
}