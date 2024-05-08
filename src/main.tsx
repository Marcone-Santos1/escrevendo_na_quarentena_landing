import React from 'react'
import ReactDOM from 'react-dom/client'

import './assets/css/index.css';

import { NavBar } from "./Components/NavBar.tsx";
import { HomeSection } from "./Components/HomeSection.tsx";
import { CardMetion } from "./Components/CardMetion.tsx";


ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <div className="min-h-[200vh]">
            <NavBar/>
            <HomeSection/>
            <div className="mt-24 flex flex-col w-full gap-2 justify-center items-center lg:flex-row">
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
    </React.StrictMode>,
)
